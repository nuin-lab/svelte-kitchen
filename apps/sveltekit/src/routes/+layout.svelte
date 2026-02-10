<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

<script lang="ts">
  // biome-ignore lint/style/useConst: Intentionally using let for Svelte prop reactivity.
  // biome-ignore lint/correctness/noUnusedVariables: To ignroe false positive linting errors caused by Biome's partial Svelte support.
  let { children } = $props();

  // Styles
  import '$lib/styles/reset.css';
</script>

<section id="hero">
  <h1>SvelteKit</h1>
  <p>
    Sveltekitでいろいろな実装を試す場。
    <br>
    すべてSPA+CSRで実装されている。
  </p>
</section>

<nav></nav>

<div id="viewport">{@render children()}</div>

<div id="back"><a href="/">Svelte Kitchen</a></div>
<div id="next"></div>

<footer>
  <div>© nuin</div>
</footer>

<style>
  :root {
    --black: hsl(16, 24%, 16%);
    --white: hsl(16, 8%, 92%);
    --white-darken: hsl(16, 8%, 88%);

    --bdr-wd: 1px;
    --bdr-rds: 0.5rem;

    font-size: max(1rem, max(18px, 0.9375vw));
  }

  :global {
    body {
      display: grid;

      background-color: var(--white);
      color: var(--black);

      font-family: "Archivo", sans-serif;

      @media screen and (width >= 1200px) {
        grid-template-columns: 90px 1.5fr 320px 512px 90px;
        grid-template-rows: auto 0.5fr 2fr;
      }
    }

    h1 {
      font-weight: 300;
      line-height: 1;
    }

    p {
      font-family: "IBM Plex Sans JP", sans-serif;

      opacity: 0.75;
    }

    a {
      color: var(--black);
      text-decoration: none;
    }
  }

  #hero {
    grid-column: 2 / 4;

    border-right: 1px solid;
    border-bottom: 1px solid;

    > p {
      margin-block: 1.5em 0;
    }

    @media screen and (width >= 1200px) {
      padding: 4rem;

      > p {
        font-size: 1.1em;
      }
    }
  }

  h1 {
    font-size: 4em;
    text-transform: uppercase;

    &::before {
      content: "/";
      margin-right: 1rem;
    }
  }

  nav {
    grid-column: 3 / 4;
    grid-row: 2 / 4;

    border-right: 1px solid;

    > ul {
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
    }

    p {
      margin-block: 0.5rem 0;

      font-size: 0.75em;
    }
  }

  #viewport {
    grid-column: 4 / 5;
    grid-row: 1 / 4;

    background-color: var(--white-darken);
  }

  #back,
  #next {
    grid-row: 1 / 4;

    > a {
    display: flex;
    align-items: center;
    justify-content: end;

    position: relative;

    padding-inline: 2rem;

    width: 100%;

    &::after {
      content: "";

      position: absolute;

      width: 1rem;
      aspect-ratio: 1;

      background-color: var(--black);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }

  #back {
    grid-column: 1 / 2;

    border-right: 1px solid;

    writing-mode: sideways-lr;

    > a::after {
      top: 0;
      left: 0;

      clip-path: polygon(0 0, 100% 0, 0 100%);
    }
  }

  #next {
    grid-column: 5 / 6;

    border-left: 1px solid;

    writing-mode: sideways-rl;

    > a::after {
      bottom: 0;
      right: 0;

      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }
  }

  footer {
    display: grid;
    align-items: end;

    grid-column: 2 / 3;
    grid-row: 3 / 4;

    padding: 2rem 4rem;
  }
</style>
