<script lang="ts">
  import { themeStore, THEMES, type Theme } from '$lib/stores/theme.js';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  
  interface Props extends HTMLButtonAttributes {
    position?: 'fixed' | 'relative';
    class?: string;
    showLabel?: boolean;
  }
  
  let {
    position = 'fixed',
    class: className = '',
    showLabel = false,
    ...restProps
  }: Props = $props();
  
  // Get current theme from store
  let currentTheme = $state<Theme>('alt-paper');
  
  // Subscribe to theme changes
  themeStore.subscribe(theme => {
    currentTheme = theme;
  });
  
  // Get theme configuration
  const themeConfig = $derived(THEMES[currentTheme]);
  
  // Base classes for theme toggle
  const baseClasses = 'theme-toggle flex items-center justify-center cursor-pointer transition-all duration-default z-50 border-none outline-none';
  
  // Position-specific classes
  const positionClasses = {
    'fixed': 'fixed top-4 right-4 w-12 h-12 rounded-full',
    'relative': 'relative w-10 h-10 rounded-md'
  };
  
  // Combine all classes
  const toggleClasses = `${baseClasses} ${positionClasses[position]} ${className}`;
  
  // Handle theme toggle
  function handleToggle() {
    themeStore.toggleTheme();
  }
  
  // Theme icons/symbols
  const themeIcons = {
    'vaporwave': '🌆', // City sunset for neon cyber
    'liquid-beige': '🏺', // Pottery for earthy luxury
    'alt-paper': '📰'  // Newspaper for paper theme
  };
  
  // Theme labels
  const themeLabels = {
    'vaporwave': 'Vaporwave',
    'liquid-beige': 'Liquid Beige',
    'alt-paper': 'Alt Paper'
  };
</script>

<button
  class={toggleClasses}
  onclick={handleToggle}
  title={`Switch to next theme (Current: ${themeLabels[currentTheme]})`}
  aria-label={`Switch theme. Current theme: ${themeLabels[currentTheme]}`}
  {...restProps}
>
  <span class="text-lg" role="img" aria-hidden="true">
    {themeIcons[currentTheme]}
  </span>
  
  {#if showLabel}
    <span class="ml-2 text-sm font-medium hidden sm:inline">
      {themeLabels[currentTheme]}
    </span>
  {/if}
</button>

<style>
  button {
    /* Theme toggle styling from original CSS */
    background: var(--surface-bg);
    border: 1px solid var(--surface-border);
    backdrop-filter: blur(var(--surface-blur));
    -webkit-backdrop-filter: blur(var(--surface-blur));
    transition: all var(--transition-speed) ease;
    /* Ensure no rounded corners for alt-paper theme */
    border-radius: var(--radius-full);
  }
  
  button:hover {
    background: var(--surface-hover);
    border-color: var(--alt-primary);
    transform: scale(1.05);
  }
  
  /* Alt-paper theme specific overrides */
  :global([data-style="alt-paper"]) button {
    background: var(--surface-bg);
    border: 2px solid var(--surface-border);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: var(--shadow-md);
    border-radius: 0 !important;
  }
  
  :global([data-style="alt-paper"]) button:hover {
    background: var(--surface-hover);
    border-color: var(--alt-primary);
    box-shadow: var(--shadow-lg);
    transform: none;
  }
  
  /* Focus styles for accessibility */
  button:focus-visible {
    outline: 2px solid var(--alt-primary);
    outline-offset: 2px;
  }
</style>