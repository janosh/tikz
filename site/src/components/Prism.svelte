<script>
  import CopyButton from '$components/CopyButton.svelte'
  import { onMount } from 'svelte'
  export let code, link
  let [linkTitle, url] = (link ?? ``).split(`||`, 2)
  const onLoad = () => window.Prism.highlightAll()
  onMount(() => window.Prism.highlightAll()) // for page reloads
  const cdn = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0`
</script>

<svelte:head>
  <link rel="stylesheet" href="{cdn}/themes/prism-okaidia.min.css" />
  <script src="{cdn}/prism.min.js">
  </script>
  <script src="{cdn}/components/prism-latex.min.js" on:load={onLoad}>
  </script>
</svelte:head>

<div>
  <div class="btns">
    {#if link}<a href={url}><button>{linkTitle}</button></a>{/if}
    <CopyButton content={code} />
  </div>
  <pre><code class="language-latex">{code}</code></pre>
</div>

<style>
  div {
    max-width: 50em;
    margin: auto;
    position: relative;
  }
  div.btns {
    position: absolute;
    top: 1em;
    right: 1em;
    display: flex;
    gap: 1em;
  }
</style>
