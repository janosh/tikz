// shell command to run during build
const copyImages = `mkdir -p static/images \
  && cp ../assets/**/*.png static/images \
`
const getTikz = `node src/getTikz.js`

module.exports = {
  // Consult https://snowpack.dev to learn about these options
  extends: `@sveltejs/snowpack-config`,
  plugins: [
    [`@snowpack/plugin-run-script`, { cmd: copyImages }],
    [`@snowpack/plugin-run-script`, { cmd: getTikz }],
  ],
}
