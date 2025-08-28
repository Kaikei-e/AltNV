<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  
  type TextElement = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  interface Props extends HTMLAttributes<HTMLElement> {
    element?: TextElement;
    class?: string;
    children?: import('svelte').Snippet;
  }
  
  let {
    element = 'span',
    class: className = '',
    children,
    ...restProps
  }: Props = $props();
  
  // Base gradient text classes
  const baseClasses = 'gradient-text';
  
  // Combine all classes
  const gradientClasses = `${baseClasses} ${className}`;
</script>

<!-- Use svelte:element to dynamically create the specified element -->
<svelte:element
  this={element}
  class={gradientClasses}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</svelte:element>

<style>
  :global(.gradient-text) {
    /* Alt-paper gradient text styling */
    background: var(--alt-primary);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* Fallback for browsers that don't support background-clip: text */
    color: var(--alt-primary);
  }
  
  /* For alt-paper theme, use solid color instead of gradient for better readability */
  :global([data-style="alt-paper"] .gradient-text) {
    background: var(--alt-primary);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--alt-primary);
  }
</style>