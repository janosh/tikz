<script context="module">
  export const preload = async ({ params }) => {
    const { slug } = params
    return { slug }
  }
</script>

<script>
  import Prism from '$components/Prism.svelte'
  import items from './items'
  export let slug
  const { title, code } = items.find((itm) => itm.slug === slug) || {}
</script>

<a href="/">&laquo; back</a>
<h1>{title}</h1>
<img src="images/{slug}-hd.png" alt={title} />
<h2>Code</h2>
<Prism
  {code}
  link="GitHub||https://github.com/janosh/tikz/blob/master/assets/{slug}/{slug}.tex" />

<style>
  h1,
  h2 {
    border-bottom: 2px solid orange;
    max-width: 10em;
    margin: 2em auto 1em;
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
</style>
