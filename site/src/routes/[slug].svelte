<script context="module">
  export function load({ page }) {
    const { slug } = page.params
    return { props: { slug } }
  }
</script>

<script>
  import Prism from '$components/Prism.svelte'
  import texFiles from './texFiles'

  export let slug

  $: ({ title, desc, code } = texFiles.find((itm) => itm.slug === slug) || {})
  $: link = `GitHub||https://github.com/janosh/tikz/blob/master/assets/${slug}/${slug}.tex`
</script>

<a href="/#{slug}" class="back" sveltekit:prefetch>&laquo; back</a>
<h1>{title}</h1>
{#if desc}
  <p>{@html desc}</p>
{/if}
<img src="assets/{slug}/{slug}-hd.png" alt={title} />

<h2>Download</h2>
<a href="assets/{slug}/{slug}.png" target="_blank">PNG</a>
<a href="assets/{slug}/{slug}-hd.png" target="_blank">PNG (HD)</a>
<a href="assets/{slug}/{slug}.pdf" target="_blank">PDF</a>
<a href="assets/{slug}/{slug}.svg" target="_blank">SVG</a>
<a href="assets/{slug}/{slug}.tex" target="_blank">TeX</a>

<h2>Code</h2>
<Prism {code} title="{slug}.tex" {link} />

<style>
  h1,
  h2 {
    border-bottom: 2px solid orange;
    max-width: 10em;
    margin: 2em auto 1em;
    padding-bottom: 8pt;
  }
  p {
    max-width: 42em;
    margin: 1em auto;
    padding: 1em;
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
  a:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  a[target='_blank'] {
    line-height: 2em;
    font-size: 3ex;
  }
  a.back {
    font-size: 3ex;
    position: absolute;
    top: 2em;
    left: 2em;
  }
</style>
