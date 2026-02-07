<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  // Types
  import type { HTMLDialogAttributes } from 'svelte/elements';

  // Pages
  // biome-ignore lint/correctness/noUnusedImports: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  import PhotoPage from '../../photos/[id]/+page.svelte';

  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  let { onkeydown, children: _children, ...rest }: HTMLDialogAttributes = $props();

  // -------------------- Declaration --------------------
  let modal: HTMLDialogElement;

  let isMounted = false;

  // -------------------------------------------------- Functions --------------------------------------------------
  function showModal() {
    if (!isMounted) {
      return;
    }

    console.log('Show modal');

    modal.showModal();
  }

  function closeModal() {
    if (!isMounted) {
      return;
    }

    console.log('Close modal');

    modal.close();
  }

  // -------------------- Handlers --------------------
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  function handleKeydown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLDialogElement }) {
    if (event.key === 'Escape') {
      history.back();
    }

    onkeydown?.(event);
  }

  $effect(() => {
    if (page.state.modalData) {
      showModal();
    } else {
      closeModal();
    }
  });

  onMount(() => {
    isMounted = true;
  });
</script>

<dialog bind:this={modal} onkeydown={handleKeydown} {...rest}>
  <button type="button" title="Close" onclick={() => history.back()}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1.5rem"
      height="1.5rem"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  </button>

  {#if page.state.modalData}
    <PhotoPage data={page.state.modalData} />
  {/if}
</dialog>

<style>
  dialog {
    padding: 0;

    height: 100%;

    color: var(--black);
    background: none;

    border: none;
    outline: none;

    overscroll-behavior: contain;

    &::backdrop {
      background-color: rgba(0, 0, 0, 0.75);
    }

    &[open] {
      display: flex;
    }
  }

  button {
    display: grid;
    place-content: center;

    position: fixed;
    top: 0;
    right: 0;

    margin: 0.5rem;
    padding: 0.5rem;

    aspect-ratio: 1;

    background: none;
    color: var(--white);

    border: none;

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
</style>
