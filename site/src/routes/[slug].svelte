<script context="module">
  export const preload = async ({ params }) => {
    const { slug } = params
    return { slug }
  }
</script>

<script>
  import CopyButton from '$components/CopyButton.svelte'
  import items from './items'
  export let slug
  const { title, code } = items.find((itm) => itm.slug === slug) || {}
</script>

<a href="/">&laquo; back</a>
<h1>{title}</h1>
<img src="images/{slug}-hd.png" alt={title} />
<h2>Code</h2>
<pre>
  <code>{code}</code>
  <CopyButton content={code} />
</pre>

<style>
  h1,
  h2 {
    margin-top: 2em;
    border-bottom: 2px solid orange;
    max-width: 10em;
    margin: 1em auto;
    padding-bottom: 8pt;
  }
  img {
    width: 100%;
    max-width: 50em;
    background: #ffffff85;
    padding: 1em;
    box-sizing: border-box;
    max-width: 40em;
    margin: auto;
    border-radius: 1ex;
  }
  a {
    background: rgba(255, 255, 255, 0.2);
    padding: 4pt 1ex;
    border-radius: 4pt;
  }
  pre {
    max-width: 50em;
    margin: auto;
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    padding: 1em 3ex;
    border-radius: 1ex;
    position: relative;
  }
  code {
    white-space: break-spaces;
  }
</style>
