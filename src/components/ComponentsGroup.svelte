<script>
  import Accordion from "./Accordion.svelte";
  import AccordionItem from "./AccordionItem.svelte";
</script>

<section class="content">
  <div class="container">
    <h1>components librery</h1>
    <div class="content__box">
      <Accordion collapse>
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
      </Accordion>
    </div>
  </div>
</section>

<style>
  .content {
    margin-block: 20px;
  }
  .content__box {
    margin-block: 50px;
    max-width: 500px;
  }
</style>
