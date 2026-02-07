<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  import { onMount } from 'svelte';
  import { goto, preloadData, pushState } from '$app/navigation';

  // Types
  import type { PageProps } from './$types';

  import type { PhotoData } from '../intercepting-routes/lib/scripts';

  // Components
  // biome-ignore lint/correctness/noUnusedImports: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  import Modal from './lib/components/Modal.svelte';

  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  let { data }: PageProps = $props();

  // -------------------------------------------------- Functions --------------------------------------------------
  async function loadData(href: string) {
    const result = await preloadData(href);

    // Create new history entry or navigate
    if (result.type === 'loaded' && result.status === 200) {
      pushState(href, { modalData: { image: result.data.image as PhotoData } });
    } else {
      await goto(href);
    }
  }

  // -------------------------------------------------- Handlers --------------------------------------------------
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  async function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    if (
      // Open in new window
      event.shiftKey ||
      // Open in new tab
      event.ctrlKey || // Windows/Linux
      event.metaKey // mac
    ) {
      return;
    }

    // Prevent navigation
    event.preventDefault();

    void loadData(event.currentTarget.href);
  }

  onMount(() => {
    console.table(data);
  });
</script>

<svelte:head>
  <title>Intercepting Routes｜nuinのすべるて調理室</title>

  <link rel="canonical" href="https://svelte-kitchen.nuin.workers.dev/sveltekit/intercepting-routes/">
</svelte:head>

<main>
  <div>
    <h1>Intercepting Routes</h1>
    <p>
      公式サイトの
      <a href="https://svelte.dev/docs/kit/shallow-routing" target="_blank" rel="noreferrer">Shallow routing</a>
      をもとに実装。
    </p>
  </div>

  <ul>
    {#each data.images as {id, alt}, idx}
      {@const pageId = idx + 1}
      <li><a href="photos/{pageId}/" onclick={handleClick}>
        <img src="https://picsum.photos/id/{id}/400.webp" alt={alt}>
      </a></li>
    {/each}
  </ul>

  <Modal />
</main>

<style>
  main {
    padding: 1rem;
  }

  div {
    padding: 1rem 0;
  }

  ul {
    display: grid;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  li {
    aspect-ratio: 1;

    overflow: hidden;

    > a {
      display: flex;

      aspect-ratio: 1;
    }
  }
</style>
