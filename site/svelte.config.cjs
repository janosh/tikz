const netlify = require(`@sveltejs/adapter-netlify`)
const pkg = require(`./package.json`)

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: netlify(),

    // hydrate the <body> element in src/app.html
    target: `body`,

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
}
