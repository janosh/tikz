import fs from 'fs'
import glob from 'glob'
import sizeOf from 'image-size'
import yaml from 'js-yaml'
const assetDir = `../assets`

const slugs = fs
  .readdirSync(assetDir)
  .filter((filename) => !filename.startsWith(`.`)) // remove hidden system files

const parsedFiles = slugs.map((slug) => {
  const downloads = glob.sync(`${assetDir}/${slug}/*.{png, pdf, svg, tex}`)

  const code = fs.readFileSync(`${assetDir}/${slug}/${slug}.tex`, `utf-8`)

  const { width, height } = sizeOf(`${assetDir}/${slug}/${slug}.png`)

  const { title, tags, description } = yaml.load(
    fs.readFileSync(`${assetDir}/${slug}/${slug}.yml`)
  )

  // assemble TeX file attributes
  return { title, slug, width, height, downloads, tags, description, code }
})

fs.writeFileSync(
  `src/slugs.ts`,
  `export default ` + JSON.stringify(slugs, null, 2)
)
fs.writeFileSync(
  `src/texFiles.ts`,
  `export default ` + JSON.stringify(parsedFiles, null, 2)
)
