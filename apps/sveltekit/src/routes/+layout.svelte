<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  // biome-ignore lint/correctness/noUnusedImports: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  import favicon from '$lib/assets/favicon.svg';

  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
