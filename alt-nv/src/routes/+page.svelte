<script lang="ts">
  // Import our new components
  import Container from "$lib/components/layout/Container.svelte";
  import ThemeToggle from "$lib/components/layout/ThemeToggle.svelte";
  import Button from "$lib/components/base/Button.svelte";
</script>

<Container class="min-h-screen py-16">
  <main class="flex flex-col text-center space-y-12">
    <!-- Theme Toggle Button at the top right of the screen -->
    <div class="absolute top-8 right-8 p-4 m-4">
      <ThemeToggle class="w-10 h-10" />
    </div>

    <!-- Hero Section with text -->
    <div class="flex flex-col items-center space-y-8">
      <h1 class="text-4xl font-bold">Alt Native</h1>
      <p class="text-lg text-gray-600">
        Alt-NV is a tool for managing and readying your favourite RSS feeds. It
        is a work in progress and will be updated regularly.
      </p>
      <Button>Get Started</Button>
    </div>
  </main>
</Container>

<style>
</style>
