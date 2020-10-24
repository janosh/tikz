<script>
  export let value, label, min, max
</script>

<label>
  {label}:
  <input type="number" bind:value {min} {max} />
  <input type="range" bind:value {min} {max} />
</label>

<style>
  label {
    display: flex;
    gap: 1ex;
  }
  input[type='number'] {
    background: transparent;
    color: inherit;
    border: 1px solid white;
    border-radius: 5pt;
    text-align: center;
    padding: 0 4pt;
    outline: none;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }
</style>
