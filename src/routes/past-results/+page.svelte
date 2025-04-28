<script>
    import ContentBlock from '$lib/ContentBlock.svelte';
</script>

<svelte:head>
  <title>Past Results | NAFF</title>
  <meta name="description" content="Northland Amateur Filmmakers Festival - Past results & competitions" />
</svelte:head>


<ContentBlock 
   title="Past NAFF Events"
   description="Did you know: the festival is open to all Northland residents, and we encourage everyone to get involved!"
/>

<ContentBlock 
   title="2024 Competition Results"
   description="The 2024 competition was our most awesome year yet!"
>
<div class="accordion big-shoulders-text-main" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        The Screen Ready Award
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Sirens</strong> by Harrison Jones
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        The On the Pro Trac Award
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>The Day I left</strong> by Jelly Pumpken Monkeys From Outer Space Trying To Gain Total World Domination
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        The Production Energy Award
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>The Recent Times!</strong> by McClotty
      </div>
    </div>
  </div>
</div>
</ContentBlock>


<ContentBlock 
   title="2023 Competition"
   description="2023 was truly a showcase of Northland's incredible talent in the filmmaking space."
   secondLinkText="See some of the amazing films from 2023!"
   secondLinkUrl="/films"
/>


