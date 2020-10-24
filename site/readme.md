<p align="center">
  <img src="static/favicon.svg" alt="TikZ" height=150>
</p>

# Svelte TikZ

Experimental site using `svelte@next` as demoed in [Rich Harris: Futuristic Web Development](https://youtu.be/qSfdtmcZ4d0). Initialized `npm init svelte@next my-app`. [Live version available here](https://svelte-tikz.netlify.app).

## Get started

1. Clone and install dependencies:

   ```sh
   git clone https://github.com/janosh/tikz
   cd tikz/site
   yarn
   ```

2. Start the dev server:

   ```sh
   yarn dev
   ```

Navigate to <http://localhost:3000>. You should see this app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Building and running in production mode

To build and serve an optimized version of the app, run

```sh
yarn serve
```

## Building

Svelte apps are built with _adapters_, which optimise your project for deployment to different environments, like [Begin](https://begin.com), [Netlify](https://www.netlify.com), [Vercel](https://vercel.com) and so on. (You can also create your own adapter — instructions TODO.)

By default, `yarn build` will generate a Node app that you can run with `node build`. To use a different adapter, install it and update your `svelte.config.js` accordingly. The following official adapters are available:

- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- ...more soon

## Deploying to Netlify

Install `netlify` if you haven't already:

```sh
yarn global add netlify
```

Then, from within this project's folder:

```sh
netlify deploy --prod
```

## Formatting

When using VS Code, install the [official Svelte extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) and add the following to your `settings.json` to enable autoformating Svelte files on save:

```json
"[svelte]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "svelte.svelte-vscode"
}
```

To get ESLint validation, also add

```json
"eslint.validate": ["svelte"]
```
