<script>
  export let content
  let btn
  function copy() {
    navigator.clipboard.writeText(content).then(
      () => {
        btn.innerText = `Copied!`
        setTimeout(() => (btn.innerText = `Copy`), 2000)
      },
      (err) => {
        console.error(err)
        btn.innerText = `Error`
      }
    )
  }
</script>

<button on:click={copy} bind:this={btn}>Copy</button>
