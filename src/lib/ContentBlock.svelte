<script>
    export let title = "";
    export let description = "";
    export let linkUrl = "";
    export let linkText = "";
    export let alt = "";
    export let imageUrl = "";
    export let secondLinkText = "";
    export let secondLinkUrl = "";
    export let teamMember = "";
  </script>
  
  <div class="padding-container">
    <div class="container-fluid shadow mt-5 info-container text-center">
      <h1 class="big-shoulders-text-main fw-bold">{title}</h1>
      <p class="big-shoulders-text-main font-italic">{teamMember}</p>
      <img class="img-fluid shadow" src="{imageUrl}" alt="{alt}">
      <h3 class="big-shoulders-text-main mt-3">{description} <a class="fw-bold" href={linkUrl}>{linkText}</a></h3>
      <slot></slot>
      <a class="big-shoulders-text-main fw-bold" href="{secondLinkUrl}">{secondLinkText}</a>
    </div>
  </div>

<style>
 .padding-container {
  padding-left: 25px;
  padding-right: 25px;
 }
 .info-container {
    background-color: rgba(249,248,250,255);
    max-width: 1000px;
    padding: 100px;
 }

 img {
    max-height: 300px;

 }
 </style>
  