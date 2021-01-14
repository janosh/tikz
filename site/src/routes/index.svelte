<script>
  import Masonry from '$components/Masonry.svelte'
  import Slider from '$components/Slider.svelte'
  import Card from '$components/Card.svelte'
  import items from './items'
  import IntersectionObserver from '../components/IntersectionObserver.svelte'

  let [minColWidth, maxColWidth] = [330, 500]
  let gap = 20
  let query
  let nVisible = 24
  const onIntersect = () => (nVisible += 24)

  $: filtered = items.filter((itm) => !query || itm.slug.includes(query))
  $: visible = filtered.slice(0, nVisible)
</script>

<h1>Random Tikz Collection</h1>
<p>
  Experimental site using
  <a href="https://svelte.dev"><code>svelte@next</code></a>
  as demoed in
  <a href="https://youtu.be/qSfdtmcZ4d0">Rich Harris: Futuristic Web Development</a>
  . Source on
  <a href="https://github.com/janosh/tikz">GitHub</a>
</p>

<div class="controls">
  <Slider label="minColWidth" bind:value={minColWidth} min="200" max={maxColWidth} />
  <Slider label="maxColWidth" bind:value={maxColWidth} min={minColWidth} max="800" />
  <Slider label="gap" bind:value={gap} min="1" max="50" />
</div>

<input name="Search" bind:value={query} placeholder="Search..." />

<Masonry items={visible} {minColWidth} {maxColWidth} {gap} let:item id="slug">
  <Card {item} />
</Masonry>
<IntersectionObserver on:intersect={onIntersect} top={400} />

<style>
  h1 {
    font-size: calc(1em + 3vw);
  }
  .controls {
    display: flex;
    flex-wrap: wrap;
    margin: 3em auto;
    gap: 1em;
    place-content: center;
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
  }
  input::placeholder {
    color: white;
  }
</style>
