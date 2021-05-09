import adapter from '@sveltejs/adapter-static'

export default {
  kit: {
    adapter: adapter(),

    // hydrate the <body> element in src/app.html
    target: `body`,
  },
}
