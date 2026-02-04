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

<main>
  <img src="https://picsum.photos/id/{data.image.id}/1200.webp" alt={data.image.alt}>
</main>
