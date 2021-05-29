<script>
  import MarkGithub from '@svicons/fa-regular/copy.svelte'

  export let content

  let span

  function copy() {
    navigator.clipboard.writeText(content).then(
      () => {
        span.innerText = `Copied!`
        setTimeout(() => (span.innerText = `Copy`), 2000)
      },
      (err) => {
        console.error(err)
        span.innerText = `Error`
      }
    )
  }
</script>

<button on:click={copy}>
  <MarkGithub height="14pt" style="vertical-align: -4px;" />
  <span bind:this={span}>Copy</span>
</button>
