<script lang="ts" context="module">
  import LawIcon from '@svicons/octicons/law.svelte'
  import CodeIcon from '@svicons/octicons/code.svelte'
  import DownloadIcon from '@svicons/octicons/download.svelte'

  import texFiles from './texFiles'

  // type union LoadOutput | undefined only temporary https://git.io/JCta2
  export function load({ page }: LoadInput): LoadOutput | undefined {
    const { slug } = page.params

    const texFile = texFiles.find((itm) => itm.slug === slug)

    // return nothin if texFile was not found to fall through to __error.svelte
    if (texFile) return { props: { texFile } }
  }
</script>

<script lang="ts">
  import Prism from '../components/Prism.svelte'
  import type { LoadInput, LoadOutput } from '@sveltejs/kit'
  import type { TexFile } from '../types'

  export let texFile: TexFile

  $: ({ title, desc, code, width, height, slug, downloads } = texFile)
  $: link = `GitHub||https://github.com/janosh/tikz/blob/main/assets/${slug}/${slug}.tex`
  const labels = [
    [`.png`, `PNG`],
    [`-hd.png`, `PNG (HD)`],
    [`.pdf`, `PDF`],
    [`.svg`, `SVG`],
    [`.tex`, `TeX`],
  ]
</script>

<a href="/" class="back" sveltekit:prefetch>&laquo; back</a>
<h1>{title}</h1>
{#if desc}
  <p>{@html desc}</p>
{/if}
<img src="assets/{slug}/{slug}-hd.png" alt={title} {width} {height} />

<h2><DownloadIcon height="1em" style="vertical-align: middle;" />&nbsp; Download</h2>

{#each labels as [ext, label]}
  {#if downloads.some((filename) => filename.includes(ext))}
    <a href="assets/{slug}/{slug}{ext}" target="_blank">
      {label}
    </a>
  {/if}
{/each}

<h2><CodeIcon height="1em" style="vertical-align: middle;" />&nbsp; Code</h2>

<Prism {code} title="{slug}.tex" {link} />

<small>
  <LawIcon height="14pt" style="vertical-align: middle;" /> MIT License - Janosh Riebesell
  2021
</small>

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
    line-height: 3ex;
    text-align: justify;
    word-break: break-all;
  }
  small {
    text-align: center;
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
    height: auto;
  }
  a {
    background: rgba(255, 255, 255, 0.2);
    padding: 4pt 1ex;
    border-radius: 4pt;
    margin: 2pt;
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
