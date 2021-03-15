import fs from 'fs'

const dirname = `../assets`

const slugs = fs
  .readdirSync(dirname)
  .filter((filename) => !filename.startsWith(`.`)) // remove hidden system files

const fileContents = slugs.map((filename) =>
  fs.readFileSync(`${dirname}/${filename}/${filename}.tex`, `utf-8`)
)

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)
const isProposition = (str) => [`and`, `to`, `vs`, `of`].includes(str)
const slugToTitle = (slug) =>
  slug
    .split(`-`)
    .map((str) => (isProposition(str) ? str : upperFirst(str)))
    .join(` `)

const parsedFiles = fileContents.map((file, idx) => {
  const [desc, tikzCode] = file.split(`\\documentclass`)
  const slug = slugs[idx]
  return {
    title: slugToTitle(slug),
    slug,
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
