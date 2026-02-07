<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  // biome-ignore lint/correctness/noUnusedImports: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  import favicon from '$lib/assets/favicon.svg';

  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  let { children } = $props();

  // Styles
  import '$lib/styles/reset.css';
</script>

<svelte:head>
  <link rel="icon" href={favicon}>
</svelte:head>

{@render children()}

<style>
  :root {
    --black: hsl(16, 24%, 16%);
    --white: hsl(16, 8%, 92%);

    --bdr-wd: 1px;
    --bdr-rds: 0.5rem;

    font-size: max(1rem, max(18px, 0.9375vw));
  }

  :global {
    body {
      background-color: var(--white);
      color: var(--black);

      font-family: "Archivo", sans-serif;
    }

    h1 {
      font-weight: 300;
      line-height: 1;
    }

    p {
      font-family: "IBM Plex Sans JP", sans-serif;

      opacity: 0.75;
    }
  }
</style>
