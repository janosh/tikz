import fs from 'fs'
import sizeOf from 'image-size'

const dirname = `../assets`

const slugs = fs
  .readdirSync(dirname)
  .filter((filename) => !filename.startsWith(`.`)) // remove hidden system files

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)
const isProposition = (str) => [`and`, `to`, `vs`, `of`].includes(str)
const slugToTitle = (slug) =>
  slug
    .split(`-`)
    .map((str) => (isProposition(str) ? str : upperFirst(str)))
    .join(` `)

const parsedFiles = slugs.map((slug) => {
  const path = `${dirname}/${slug}/${slug}`

  const texFile = fs.readFileSync(`${path}.tex`, `utf-8`)
  const [desc, tikzCode] = texFile.split(`\\documentclass`)

  const { width, height } = sizeOf(`${path}.png`)

  return {
    title: slugToTitle(slug),
    slug,
    width,
    height,
    // split on LaTeX comment sign (%), join with HTML line breaks and
    // remove leading comment sign
    desc: desc.split(`\n% `).join(` `).slice(2),
    code: `\\documentclass${tikzCode}`,
  }
})

fs.writeFileSync(
  `src/routes/slugs.js`,
  `export default ` + JSON.stringify(slugs)
)
fs.writeFileSync(
  `src/routes/texFiles.js`,
  `export default ` + JSON.stringify(parsedFiles)
)
