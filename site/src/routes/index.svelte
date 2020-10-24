<script>
  import Masonry from '$components/Masonry.svelte'
  import Slider from '$components/Slider.svelte'
  import Card from '$components/Card.svelte'
  import items from './items'

  let [minColWidth, maxColWidth] = [330, 500]
  let gap = 20
</script>

<h1>Random Tikz Collection</h1>
<p>
  Experimental site using
  <a href="https://svelte.dev"><code>svelte@next</code></a>
  as demoed in
  <a href="https://youtu.be/qSfdtmcZ4d0">Rich Harris: Futuristic Web Development</a>.
  Source on
  <a href="https://github.com/janosh/tikz">GitHub</a>
</p>

<div class="controls">
  <Slider label="minColWidth" bind:value={minColWidth} min="10" max={maxColWidth} />
  <Slider label="maxColWidth" bind:value={maxColWidth} min={minColWidth} max="800" />
  <Slider label="gap" bind:value={gap} min="1" max="50" />
</div>

<Masonry {items} {minColWidth} {maxColWidth} {gap} let:item>
  <Card {item} />
</Masonry>

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
</style>
