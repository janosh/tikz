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

<button on:click={copy} bind:this={btn}>copy</button>

<style>
  button {
    position: absolute;
    font-size: 2ex;
    top: 1em;
    right: 1em;
    background: #3f51b5;
    border: none;
    outline: none;
    padding: 3pt 1ex;
    border-radius: 1ex;
    transition: 0.2s;
    color: white;
  }
  button:hover {
    background: teal;
  }
</style>
