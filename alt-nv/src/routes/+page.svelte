<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  
  // Import our new components
  import Container from "$lib/components/layout/Container.svelte";
  import ThemeToggle from "$lib/components/layout/ThemeToggle.svelte";
  import Card from "$lib/components/base/Card.svelte";
  import Button from "$lib/components/base/Button.svelte";
  import Link from "$lib/components/base/Link.svelte";
  import Heading from "$lib/components/typography/Heading.svelte";
  import Paragraph from "$lib/components/typography/Paragraph.svelte";
  import GradientText from "$lib/components/typography/GradientText.svelte";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<!-- Theme Toggle Button -->
<ThemeToggle />

<Container class="min-h-screen py-16">
  <main class="flex flex-col items-center text-center space-y-12">
    
    <!-- Hero Section -->
    <div class="space-y-6">
      <Heading level={1}>
        Welcome to <GradientText>Alt-NV</GradientText>
      </Heading>
      
      <Paragraph size="lg" class="max-w-2xl">
        A modern Tauri + SvelteKit application featuring the Alt-Paper theme design system. 
        Clean, newspaper-inspired aesthetics with beautiful typography and responsive layouts.
      </Paragraph>
    </div>

    <!-- Logo Grid -->
    <div class="flex items-center justify-center gap-8 flex-wrap">
      <Link href="https://vite.dev" external class="logo-link">
        <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
      </Link>
      <Link href="https://tauri.app" external class="logo-link">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
      </Link>
      <Link href="https://svelte.dev" external class="logo-link">
        <img src="/svelte.svg" class="logo svelte-kit" alt="SvelteKit Logo" />
      </Link>
    </div>

    <!-- Interactive Demo -->
    <Card class="max-w-md w-full space-y-6">
      <Heading level={3}>Interactive Demo</Heading>
      
      <form onsubmit={greet} class="space-y-4">
        <div>
          <input 
            id="greet-input" 
            placeholder="Enter a name..." 
            bind:value={name}
            class="w-full px-4 py-2 border-2 transition-colors duration-default focus:outline-none input-alt-paper"
            style="
              border-radius: 0;
              border-color: var(--surface-border);
              background-color: var(--surface-bg);
              color: var(--text-primary);
            "
          />
        </div>
        
        <Button type="submit" variant="accent" class="w-full">
          Greet
        </Button>
      </form>
      
      {#if greetMsg}
        <div class="p-4 border" style="background-color: var(--surface-hover); border-color: var(--alt-primary);">
          <Paragraph variant="primary">{greetMsg}</Paragraph>
        </div>
      {/if}
    </Card>

    <!-- Features Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
      
      <Card hover={false} padding="md" class="text-left">
        <Heading level={4} class="mb-3">🎨 Theme System</Heading>
        <Paragraph size="sm">
          Three beautiful themes: Vaporwave (neon cyber), Liquid Beige (earthy luxury), 
          and Alt-Paper (clean newspaper). Click the theme toggle to switch between them.
        </Paragraph>
      </Card>

      <Card hover={false} padding="md" class="text-left">
        <Heading level={4} class="mb-3">📱 Responsive</Heading>
        <Paragraph size="sm">
          Mobile-first responsive design with fluid typography scaling. 
          Beautiful on desktop, tablet, and mobile devices.
        </Paragraph>
      </Card>

      <Card hover={false} padding="md" class="text-left">
        <Heading level={4} class="mb-3">♿ Accessible</Heading>
        <Paragraph size="sm">
          Built with accessibility in mind. Proper focus management, 
          semantic HTML, and reduced motion support.
        </Paragraph>
      </Card>

    </div>

    <!-- Typography Showcase -->
    <div class="w-full max-w-2xl space-y-8 mt-16">
      <Heading level={2}>Typography Showcase</Heading>
      
      <div class="space-y-4 text-left">
        <Heading level={1}>Heading Level 1</Heading>
        <Heading level={2}>Heading Level 2</Heading>
        <Heading level={3}>Heading Level 3</Heading>
        <Heading level={4}>Heading Level 4</Heading>
        <Heading level={5}>Heading Level 5</Heading>
        <Heading level={6}>Heading Level 6</Heading>
      </div>

      <div class="space-y-4 text-left">
        <Paragraph variant="primary">
          Primary paragraph text with excellent readability. 
          The Alt-Paper theme uses serif fonts for a newspaper-like aesthetic.
        </Paragraph>
        
        <Paragraph variant="secondary">
          Secondary paragraph text is slightly muted but still highly readable.
          Perfect for supporting content and descriptions.
        </Paragraph>
        
        <Paragraph variant="muted" size="sm">
          Muted text in smaller size for footnotes, captions, and metadata.
        </Paragraph>
      </div>

      <div class="space-y-2">
        <Paragraph>
          Links are styled with underlines: <Link href="https://github.com">GitHub</Link>, 
          <Link href="https://svelte.dev">Svelte</Link>, and 
          <Link href="https://tailwindcss.com">Tailwind CSS</Link>.
        </Paragraph>
      </div>
    </div>

    <!-- Button Showcase -->
    <div class="space-y-6">
      <Heading level={2}>Button Components</Heading>
      
      <div class="flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" size="sm">Primary Small</Button>
        <Button variant="primary" size="md">Primary Medium</Button>
        <Button variant="primary" size="lg">Primary Large</Button>
      </div>
      
      <div class="flex flex-wrap items-center justify-center gap-4">
        <Button variant="accent" size="sm">Accent Small</Button>
        <Button variant="accent" size="md">Accent Medium</Button>
        <Button variant="accent" size="lg">Accent Large</Button>
      </div>
      
      <div class="flex flex-wrap items-center justify-center gap-4">
        <Button variant="ghost" size="sm">Ghost Small</Button>
        <Button variant="ghost" size="md">Ghost Medium</Button>
        <Button variant="ghost" size="lg">Ghost Large</Button>
      </div>
    </div>

  </main>
</Container>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: 0.75s;
  }

  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte-kit:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }

  .logo.tauri:hover {
    filter: drop-shadow(0 0 2em #24c8db);
  }

  /* Logo link hover styles are handled by the Link component */

  /* Alt-paper theme input styling */
  .input-alt-paper {
    font-family: var(--font-primary);
    line-height: 1.4;
  }

  .input-alt-paper:focus {
    box-shadow: var(--shadow-sm);
    border-color: var(--alt-primary) !important;
  }
  
  .input-alt-paper::placeholder {
    color: var(--text-muted);
    opacity: 1;
  }
</style>
