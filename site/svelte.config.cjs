/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: `@sveltejs/adapter-netlify`,
    // hydrate the <body> element in src/app.html
    target: `body`,
  },
}
