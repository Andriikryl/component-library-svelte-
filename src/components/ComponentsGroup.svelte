<script>
  import Accordion from "./Accordion.svelte";
  import AccordionItem from "./AccordionItem.svelte";

  const items = [
    {
      title: "Item 1",
      content:
        "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eveniet magni. Recusandae, nihil voluptatem labore tempora ipsam eos corrupti doloremque aliquam est veritatis quia suscipit minus in incidunt velit at?",
    },
    {
      title: "Item 2",
      content:
        "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eveniet magni. Recusandae, nihil voluptatem labore tempora ipsam eos corrupti doloremque aliquam est veritatis quia suscipit minus in incidunt velit at?",
    },
    {
      title: "Item 3",
      content:
        "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eveniet magni. Recusandae, nihil voluptatem labore tempora ipsam eos corrupti doloremque aliquam est veritatis quia suscipit minus in incidunt velit at?",
    },
    {
      title: "Item 4",
      content:
        "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eveniet magni. Recusandae, nihil voluptatem labore tempora ipsam eos corrupti doloremque aliquam est veritatis quia suscipit minus in incidunt velit at?",
    },
  ];
</script>

<section class="content">
  <div class="container">
    <h1>components librery</h1>
    <div class="content__box">
      <Accordion collapse --accordion-width="60ch">
        {#each items as item, i}
          <AccordionItem open={i === 0}>
            <svelte:fragment slot="title">{item.title}</svelte:fragment>
            <svelte:fragment slot="content">{item.content}</svelte:fragment>
          </AccordionItem>
        {/each}
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
