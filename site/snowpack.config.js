const cmd = `ln -sf $PWD/../assets $PWD/static \
  && node src/getTikz.js
`

module.exports = {
  // Consult https://snowpack.dev to learn about these options
  extends: `@sveltejs/snowpack-config`,
  plugins: [[`@snowpack/plugin-run-script`, { cmd }]],
}
