const fs = require(`fs`)

const tikzImages = fs
  .readdirSync(`../assets`)
  .filter((filename) => !filename.startsWith(`.`)) // remove hidden system files

const tikzModule = `export default ` + JSON.stringify(tikzImages)

fs.writeFileSync(`src/routes/tikz.js`, tikzModule)
