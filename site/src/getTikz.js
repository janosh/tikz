import fs from 'fs'

const dirname = `../assets`

const slugs = fs
  .readdirSync(dirname)
  .filter((filename) => !filename.startsWith(`.`)) // remove hidden system files

const tikz = slugs.map((filename) =>
  fs.readFileSync(`${dirname}/${filename}/${filename}.tex`, `utf-8`)
)

const slugModule = `export default ` + JSON.stringify(slugs)
const tikzModule = `export default ` + JSON.stringify(tikz)

fs.writeFileSync(`src/routes/slugs.js`, slugModule)
fs.writeFileSync(`src/routes/tikz.js`, tikzModule)
