<script lang="ts" context="module">
  export function load({ error, status }: ErrorLoadInput): LoadOutput {
    return {
      props: { error, status },
    }
  }
</script>

<script lang="ts">
  import { dev } from '$app/env'

  import type { ErrorLoadInput, LoadOutput } from '@sveltejs/kit'

  export let status: number
  export let error: Error
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div>
  <h1>{error.name} {status}</h1>

  {#if status === 404}
    <p>
      😅 Page not found. Back to
      <a sveltekit:prefetch href="/">index page</a>. 🤦
    </p>
  {/if}

  {#if dev && error?.stack}
    <h2>Stack Trace</h2>
    <pre>{error.stack}</pre>
  {/if}
</div>

<style>
  div {
    font-size: 1.2em;
    max-width: 45em;
    padding: 5em 3em 1em;
    margin: auto;
  }
  p {
    text-align: center;
  }
  pre {
    overflow: scroll;
    font-size: 0.9em;
    white-space: pre-wrap;
    background: var(--accentBg);
    padding: 5pt 1em;
    border-radius: 3pt;
  }
</style>
