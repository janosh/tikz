<script lang="ts">
  export let tags: string[]
  export let fontSize = `9pt`
</script>

<p class="tags">
  {#each tags as tag}
    <small style:font-size={fontSize}>{tag}</small>
  {/each}
</p>

<style>
  p.tags {
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    gap: 4pt;
    padding: 0;
    margin: 0 1ex;
  }
  p.tags small {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0 4pt;
    border-radius: 3pt;
  }
</style>
