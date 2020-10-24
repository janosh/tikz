// shell command to run during build
const cmd = `mkdir -p static/images \
  && cp ../assets/**/*.png static/images \
`

module.exports = {
  // Consult https://snowpack.dev to learn about these options
  extends: `@sveltejs/snowpack-config`,
  plugins: [[`@snowpack/plugin-run-script`, { cmd }]],
}
