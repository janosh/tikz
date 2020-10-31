import items from './tikz.js'

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)
const isProposition = (str) => [`and`, `to`, `vs`].includes(str)
const slugToTitle = (slug) =>
  slug
    .split(`-`)
    .map((str) => (isProposition(str) ? str : upperFirst(str)))
    .join(` `)

export default items.map((slug) => ({ title: slugToTitle(slug), slug }))
