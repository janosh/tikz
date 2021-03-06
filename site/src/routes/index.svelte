<script lang="ts">
  import Law from '@svicons/octicons/law.svelte'
  import MarkGithub from '@svicons/octicons/mark-github.svelte'
  import Masonry from 'svelte-bricks'

  import GitHubCorner from '../components/GitHubCorner.svelte'
  import Card from '../components/Card.svelte'
  import texFiles from './texFiles'
  import slugs from './slugs'
  import IntersectionObserver from '../components/IntersectionObserver.svelte'

  let [minColWidth, maxColWidth] = [330, 500]
  let gap = 20
  let query: string
  let nVisible = 24
  const onIntersect = () => (nVisible += 12)

  $: filtered = texFiles.filter((itm) => !query || itm.slug.includes(query.toLowerCase()))
  $: visible = filtered.slice(0, nVisible)
</script>

<!-- placed here so SvelteKit crawls all pages -->
<!-- https://stackoverflow.com/a/63388587 -->
<ul style="visibility: hidden; position: absolute; max-width: 50vw; overflow: hidden;">
  {#each slugs as slug}
    <a href={slug}>{slug}</a>
  {/each}
</ul>

<GitHubCorner href="https://github.com/janosh/tikz" />

<h1>Random Tikz Collection</h1>
<p>
  {texFiles.length} standalone TikZ images, mostly about physics and machine learning.
</p>
<p>
  Built with <a href="https://svelte.dev">Svelte</a> by
  <a href="https://janosh.dev">Janosh Riebesell</a>.
</p>
<p>
  <MarkGithub height="16pt" style="vertical-align: -2pt;" />&nbsp; TikZ and Svelte code on
  <a href="https://github.com/janosh/tikz">GitHub</a>. &ensp;

  <Law height="16pt" style="vertical-align: -4pt;" />&nbsp;
  <a href="https://github.com/janosh/tikz/blob/main/license">MIT licensed</a>. Feel free
  to reuse.
</p>

<input name="Search" bind:value={query} placeholder="Search..." />

<Masonry items={visible} {minColWidth} {maxColWidth} {gap} let:item id="slug">
  <Card {item} />
</Masonry>
<IntersectionObserver on:intersect={onIntersect} top={400} />

<style>
  h1 {
    font-size: calc(1em + 3vw);
  }
  p {
    font-size: 2.2ex;
  }
  input {
    margin-bottom: 2em;
    font-size: 2ex;
    border: none;
    outline: none;
    padding: 4pt 1ex;
    border-radius: 1ex;
    color: inherit;
    background: black;
    border: 1px dashed darkgrey;
  }
  input::placeholder {
    color: white;
  }
  :global(:root) {
    --ghc-bg: white;
    --ghc-color: var(--body-bg);
  }
</style>
