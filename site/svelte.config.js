import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),

    // hydrate the <body> element in src/app.html
    target: `body`,
  },
}
