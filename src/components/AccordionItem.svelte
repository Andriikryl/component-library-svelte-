<script lang="ts">
  export let open;

  function toggleOpen() {
    open = !open;
  }
</script>

<div class="accordion-item">
  <button on:click={toggleOpen} class="accordion-toggle">
    <div class="accordion-title">
      <slot name="title" />
    </div>

    <div class="accordion-caret">👉️</div>
  </button>

  {#if open}
    <div class="accordion-content">
      <slot name="content" />
    </div>
  {/if}
</div>

<style>
  .accordion-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: var(--accordion-padding, 1rem);
    color: var(--accordion-color, inherit);
    font: inherit;
    font-weight: 600;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: var(--accordion-radius, 4px);
    transition: background-color 0.1s ease;
  }
  .accordion-toggle:hover {
    background-color: var(--accordion-hover, hsl(220 20% 20%));
  }

  .accordion-content {
    padding: var(--accordion-content-padding, 1rem);
  }
</style>
