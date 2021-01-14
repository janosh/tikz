const cmd = `ln -sf $PWD/../assets $PWD/static \
  && node src/getTikz.js
`

module.exports = {
  // Consult https://snowpack.dev to learn about these options
  extends: `@sveltejs/snowpack-config`,
  // getTikz requires that the root-level assets directory is first symlinked
  // into the site's static directory via `ln -s $PWD/../assets $PWD/static`
  plugins: [[`@snowpack/plugin-run-script`, { cmd: `node src/getTikz.js` }]],
}
