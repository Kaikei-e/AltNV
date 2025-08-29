<script lang="ts">
  // Import our new components
  import Container from "$lib/components/layout/Container.svelte";
  import ThemeToggle from "$lib/components/layout/ThemeToggle.svelte";
  import Button from "$lib/components/base/Button.svelte";
</script>

<Container class="min-h-screen p-16" size="full">
  <main class="flex flex-col text-center space-y-12">
    <!-- Hero Section with text and button.  Space between the text and the button is 8px. -->
    <div class="flex flex-col items-center space-y-8 mt-24">
      <h1 class="text-4xl font-bold">Alt Native</h1>
      <p class="text-lg text-gray-600">
        Alt-NV is a tool for managing and reading your favourite RSS feeds. It
        is a work in progress and will be updated regularly.
      </p>
      <Button class="mt-8">Get Started</Button>
    </div>
  </main>
</Container>

<style>
</style>
