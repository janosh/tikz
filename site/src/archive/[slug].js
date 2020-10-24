import items from './items'

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params

  if (items.includes(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(slug)
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}
