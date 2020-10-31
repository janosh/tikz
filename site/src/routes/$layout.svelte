<slot />

<style>
  :global(body) {
    background: #090019;
    padding: 2em;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    color: white;
    text-align: center;
    font-size: 3ex;
  }
  :global(a) {
    color: #0075ff;
    text-decoration: none;
  }
  :global(a):hover {
    color: orange;
  }
  :global(button) {
    font-size: 2ex;
    background: #3f51b5;
    border: none;
    outline: none;
    padding: 3pt 1ex;
    border-radius: 1ex;
    transition: 0.2s;
    color: white;
  }
  :global(button:hover) {
    background: teal;
  }
</style>
