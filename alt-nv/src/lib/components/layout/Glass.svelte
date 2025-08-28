<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  
  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children?: import('svelte').Snippet;
  }
  
  let {
    class: className = '',
    hover = true,
    padding = 'none',
    children,
    ...restProps
  }: Props = $props();
  
  // Base glass classes
  const baseClasses = 'glass transition-all duration-default';
  
  // Hover classes
  const hoverClasses = hover ? 'cursor-pointer' : '';
  
  // Padding classes
  const paddingClasses = {
    'none': 'p-0',
    'sm': 'p-4',
    'md': 'p-6',
    'lg': 'p-8'
  };
  
  // Combine all classes
  const glassClasses = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
</script>

<div class={glassClasses} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  div {
    /* Glass surface styling from original CSS */
    background: var(--surface-bg);
    border: 1px solid var(--surface-border);
    backdrop-filter: blur(var(--surface-blur)) saturate(120%);
    -webkit-backdrop-filter: blur(var(--surface-blur)) saturate(120%);
    border-radius: var(--radius-lg);
    transition: all var(--transition-speed) ease;
  }
  
  div:hover {
    background: var(--surface-hover);
    transform: translateY(-2px);
  }
  
  /* Alt-paper theme specific overrides */
  :global([data-style="alt-paper"]) div {
    background: var(--surface-bg);
    border: 1px solid var(--surface-border);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-speed) ease;
    border-radius: 0 !important;
  }
  
  :global([data-style="alt-paper"]) div:hover {
    background: var(--surface-hover);
    box-shadow: var(--shadow-md);
    border-color: var(--alt-primary);
    transform: none; /* No transform for paper theme */
  }
</style>