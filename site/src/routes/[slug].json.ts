import texFiles from '../texFiles'

import type { EndpointOutput } from '@sveltejs/kit'

type GetInput = { params: { slug: string } }

export function get({ params }: GetInput): EndpointOutput | undefined {
  const { slug } = params

  const texFile = texFiles.find((itm) => itm.slug === slug)

  if (texFile) return { body: texFile }

  // Not returning is equivalent to an explicit 404 response.
  // https://kit.svelte.dev/docs#routing-endpoints
}
