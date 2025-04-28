<script>
    import ContentBlock from '$lib/ContentBlock.svelte';
</script>

<svelte:head>
  <title>Join | NAFF</title>
  <meta name="description" content="Northland Amateur Filmmakers Festival - Join the Festival here!" />
</svelte:head>


<ContentBlock 
   title="What is this?!"
   description="NAFF is a free-to-enter filmmaker's festival for Northlanders, with judging from industry professionals.
It's all about unleashing Te Tai Tokerau's creativity!"
/>


<ContentBlock 
   title="What's the timeline for the 2025 competition?"
   description="The premiere for NAFF 2025 will be on November 20."
>
  <table class="table big-shoulders-text-main">
    <thead>
      <tr>
        <th scope="col">Info</th>
        <th scope="col">Opens</th>
        <th scope="col">Closes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Entries</th>
        <td>1 Aug 2025</td>
        <td>1 Nov 2025</td>
      </tr>
    </tbody>
  </table>
</ContentBlock>

<ContentBlock 
   title="Info"
   description="You make a short film under 10 minutes,
and there are two age categories to enter under."
>

<ul class="list-group">
  <li class="list-group-item big-shoulders-text-main">Under 13</li>
  <li class="list-group-item big-shoulders-text-main">13 and over</li>
</ul>

</ContentBlock>

<ContentBlock 
   title="How do I join?"
   description="The 2025 competition opens for entries on Aug 1st 2025! Read the rules and regulations, and then enter your film!"
   secondLinkUrl="/rules.pdf"
   secondLinkText="Read the rules and regulations!"
/>

