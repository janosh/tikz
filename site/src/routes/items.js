import slugs from './slugs.js'
import tikz from './tikz.js'

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)
const isProposition = (str) => [`and`, `to`, `vs`, `of`].includes(str)
const slugToTitle = (slug) =>
  slug
    .split(`-`)
    .map((str) => (isProposition(str) ? str : upperFirst(str)))
    .join(` `)

export default slugs.map((slug, idx) => ({
  title: slugToTitle(slug),
  slug,
  code: tikz[idx],
}))
