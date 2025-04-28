<script>
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
  </script>
  
  <div class="page-wrapper">
    <Navbar />
  
    <main class="content">
      <slot /> <!-- This is where page content will be rendered -->
    </main>
  
    <Footer />
  </div>
  
  <style>
    .page-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  
    .content {
      flex: 1;
      padding-bottom: 2rem;
    }
  </style>
  