<script>
  export let item
  const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)
  const isProposition = (str) => [`and`, `to`, `vs`].includes(str)
  const title = item
    .split(`-`)
    .map((str) => (isProposition(str) ? str : upperFirst(str)))
    .join(` `)
</script>

<div>
  <h2>{title}</h2>
  <img src="images/{item}.png" alt={item} />
</div>

<style>
  div {
    display: grid;
    place-content: center;
    border-radius: 1ex;
    transition: 0.5s;
    cursor: pointer;
    transform-style: preserve-3d;
    background: #595975;
    transition: 0.5s;
  }
  div:hover {
    transform: scale(1.02);
  }
  h2 {
    margin: 1ex;
  }
  img {
    box-sizing: border-box;
    width: calc(100% - 2ex);
    background: #ffffff85;
    margin: 1ex;
    padding: 1ex;
    border-radius: 4pt;
  }
</style>
