<script context="module">
  export const preload = async ({ params }) => {
    const { slug } = params
    return { slug }
  }
</script>

<script>
  import items from './items'
  export let slug
  const { title } = items.find((itm) => itm.slug === slug)
</script>

<h1>{title}</h1>
<div><img src="images/{slug}-hd.png" alt={title} /></div>

<style>
  img {
    width: 100%;
    border: 1px solid white;
  }
</style>
