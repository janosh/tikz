import { browser } from '$app/environment'
import { diagrams } from '$lib'
import { session_store, url_param_store } from 'svelte-zoo/stores'
import { writable } from 'svelte/store'

// Only create stores that depend on browser APIs when in browser environment
export const search = browser ? url_param_store(`search`, ``) : writable(``) // fallback for SSR

export const tag_filter_mode = browser
  ? session_store<`and` | `or`>(`tag-filter-mode`, `or`)
  : writable<`and` | `or`>(`or`)

export const filter_tags = browser
  ? session_store<{ label: string; count: number }[]>(`filter-tags`, [])
  : writable([])

export const filtered_diagrams = writable(diagrams)
