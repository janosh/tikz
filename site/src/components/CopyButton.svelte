<script>
  import CopyIcon from '@svicons/fa-regular/copy.svelte'

  export let content

  let span

  async function copy() {
    try {
      await navigator.clipboard.writeText(content)
      span.innerText = `Copied!`
      setTimeout(() => (span.innerText = `Copy`), 2000)
    } catch (err) {
      console.error(err)
      span.innerText = `Error`
    }
  }
</script>

<button on:click={copy}>
  <CopyIcon height="14pt" style="vertical-align: -4px;" />
  <span bind:this={span}>Copy</span>
</button>
