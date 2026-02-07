<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  let { children } = $props();
</script>

<div>{@render children()}</div>

<style>
  div {
    margin-inline: auto;

    max-inline-size: 512px;
    min-block-size: 100dvb;

    border-inline: 1px solid;
  }

  :global(img) {
    width: 100%;

    object-fit: contain;
  }
</style>
