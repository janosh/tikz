<script>
  import { crossfade } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  export let items = []
  export let minColWidth = 330
  export let maxColWidth = 500
  export let gap = 20
  export let id = `id` // https://svelte.dev/tutorial/keyed-each-blocks
  export let width = 0
  export let height = 0
  export let animate = true

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),
    fallback(node) {
      const style = getComputedStyle(node)
      const transform = style.transform === `none` ? `` : style.transform

      return {
        duration: 500,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      }
    },
  })

  $: nCols = Math.min(items.length, Math.floor(width / (minColWidth + gap)) || 1)
  $: itemsToCols = items.reduce(
    (cols, item, idx) => {
      cols[idx % cols.length].push([item, idx])
      return cols
    },
    Array(nCols)
      .fill()
      .map(() => [])
  )
  function getId(item) {
    if (typeof item === `object`) return item[id]
    if ([`string`, `number`].includes(typeof item)) return item
  }
</script>

<div
  class="masonry"
  bind:clientWidth={width}
  bind:clientHeight={height}
  style="gap: {gap}px;">
  {#each itemsToCols as col}
    <div class="col" style="gap: {gap}px; max-width: {maxColWidth}px;">
      {#if animate}
        {#each col as [item, idx] (getId(item) ?? idx)}
          <div
            in:receive={{ key: item[id] ?? idx }}
            out:send={{ key: item[id] ?? idx }}
            animate:flip={{ duration: 200 }}>
            <slot {idx} {item} />
          </div>
        {/each}
      {:else}
        {#each col as [item, idx] (getId(item) ?? idx)}
          <slot {idx} {item} />
        {/each}
      {/if}
    </div>
  {/each}
</div>

<style>
  .masonry {
    display: flex;
    justify-content: center;
  }
  .col {
    display: grid;
    height: max-content;
    width: 100%;
  }
</style>
