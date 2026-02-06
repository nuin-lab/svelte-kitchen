<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  import { onMount } from 'svelte';

  // Types
  import type { PageProps } from './$types';

  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  let { data }: PageProps = $props();

  onMount(() => {
    console.table(data);
  });
</script>

<svelte:head>
  <title>Intercepting Routes｜nuinのすべるて調理室</title>
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

</main>

<style>
  main {
    margin-inline: auto;
    padding: 1rem;

    max-width: 512px;

    border-inline: 1px solid;
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
