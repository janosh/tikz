<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`)
    const data = await res.json()
    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  export let id = 'conv2d'
</script>

<h1>test</h1>
<div><img src="images/{id}-hd.png" alt={id} /></div>
