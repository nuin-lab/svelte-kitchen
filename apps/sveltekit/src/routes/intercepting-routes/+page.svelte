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
  <section>
    <h1>Intercepting Routes</h1>
    <p>
      Visit <a href="https://svelte.dev/docs/kit/shallow-routing">svelte.dev/docs/kit/shallow-routing</a> to read the
      documentation
    </p>
  </section>
</main>

<style>
</style>
