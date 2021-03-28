<script>
  import Masonry from '../components/Masonry.svelte'
  import Card from '../components/Card.svelte'
  import texFiles from './texFiles'
  import IntersectionObserver from '../components/IntersectionObserver.svelte'

  let [minColWidth, maxColWidth] = [330, 500]
  let gap = 20
  let query
  let nVisible = 24
  const onIntersect = () => (nVisible += 12)

  $: filtered = texFiles.filter((itm) => !query || itm.slug.includes(query))
  $: visible = filtered.slice(0, nVisible)
</script>

<h1>Random Tikz Collection</h1>
<p>
  By <a href="https://janosh.dev">Janosh Riebesell</a>. Source code on
  <a href="https://github.com/janosh/tikz">GitHub</a>
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
</style>
