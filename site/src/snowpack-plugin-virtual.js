const path = require(`path`)

const PREFIX = `\0virtual:`

// Copied from https://github.com/rollup/plugins/blob/master/packages/virtual/src/index.ts
module.exports = function virtual(_, modules) {
  const resolvedIds = new Map()

  Object.keys(modules).forEach((id) => {
    resolvedIds.set(path.resolve(id), modules[id])
  })

  return {
    name: `virtual`,
    resolve: {
      input: [],
      output: [`.js`],
    },

    resolveId(id, importer) {
      if (id in modules) return PREFIX + id

      if (importer) {
        const importerNoPrefix = importer.startsWith(PREFIX)
          ? importer.slice(PREFIX.length)
          : importer
        const resolved = path.resolve(path.dirname(importerNoPrefix), id)
        if (resolvedIds.has(resolved)) return PREFIX + resolved
      }

      return null
    },

    load(id) {
      if (id.startsWith(PREFIX)) {
        const idNoPrefix = id.slice(PREFIX.length)

        return idNoPrefix in modules
          ? modules[idNoPrefix]
          : resolvedIds.get(idNoPrefix)
      }

      return null
    },
  }
}

// import path from 'path'

// const PREFIX = `\0virtual:`

// // Copied from https://github.com/rollup/plugins/blob/master/packages/virtual/src/index.ts
// export function virtual(modules) {
//   const resolvedIds = new Map()

//   Object.keys(modules).forEach((id) => {
//     resolvedIds.set(path.resolve(id), modules[id])
//   })

//   return {
//     name: `virtual`,

//     resolveId(id, importer) {
//       if (id in modules) return PREFIX + id

//       if (importer) {
//         const importerNoPrefix = importer.startsWith(PREFIX)
//           ? importer.slice(PREFIX.length)
//           : importer
//         const resolved = path.resolve(path.dirname(importerNoPrefix), id)
//         if (resolvedIds.has(resolved)) return PREFIX + resolved
//       }

//       return null
//     },

//     load(id) {
//       if (id.startsWith(PREFIX)) {
//         const idNoPrefix = id.slice(PREFIX.length)

//         return idNoPrefix in modules
//           ? modules[idNoPrefix]
//           : resolvedIds.get(idNoPrefix)
//       }

//       return null
//     },
//   }
// }
