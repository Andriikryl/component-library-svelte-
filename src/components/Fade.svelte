<script lang="ts">
  import { fade } from "svelte/transition";

  let animate = false;
</script>

<div class="container">
  <h2 class="title">fade</h2>
  <label>
    <input type="checkbox" bind:checked={animate} />
    Animate
  </label>

  {#if animate}
    <p transition:fade>There are no mistakes, only happy accidents.</p>
  {/if}
</div>

<style>
  .container {
    padding-block: 100px;
  }
  .title {
    text-transform: uppercase;
    margin-block-end: 20px;
  }
  label {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>
