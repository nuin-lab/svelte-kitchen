<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts" module>
  export type NavItem = {
    href: string;
    label: string;
    description: string;
  };
</script>

<script lang="ts">
  // Types
  type Props = {
    items: NavItem[];
  };

  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  let { items }: Props = $props();
</script>

<nav>
  {#if items.length > 0}
    <ul>
      {#each items as {href, label, description}}
        <li>
          <a href="{href}">{label}</a>
          <p>{description}</p>
        </li>
      {/each}
    </ul>
  {/if}
</nav>

<style>
  nav {
    grid-column: 3 / 4;
    grid-row: 2 / 4;

    border-right: 1px solid;
  }

  ul {
    margin: 0;
    margin-right: 1.5em;
    padding: 1em 0;

    height: 100%;

    border-right: 1px solid;

    list-style: none;
  }

  li {
    position: relative;
    padding-right: 1.5em;

    text-align: end;

    &::before {
      --size: 0.5em;
      --half: var(--size) / 2;

      content: "";
      display: block;

      position: absolute;
      top: calc(0.5lh - var(--half));
      right: calc(-1 * var(--half));

      width: var(--size);
      aspect-ratio: 1;

      background-color: var(--white);

      border: 1px solid;
      border-radius: var(--size);
    }

    @media (hover: hover) and (pointer: fine) {
      &:has(a:hover)::before {
        background-color: var(--black);
      }
    }
  }

  a {
    font-size: 1.25em;
    line-height: 1;
  }

  p {
    margin-block: 0.75rem 0;

    font-size: 0.75em;
    line-height: 1;
  }
</style>
