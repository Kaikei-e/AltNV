<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  
  type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
  type HeadingSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  
  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    size?: HeadingSize;
    gradient?: boolean;
    class?: string;
    children?: import('svelte').Snippet;
  }
  
  let {
    level = 1,
    size,
    gradient = false,
    class: className = '',
    children,
    ...restProps
  }: Props = $props();
  
  // Default size based on heading level if not specified
  const defaultSizes: Record<HeadingLevel, HeadingSize> = {
    1: '4xl',
    2: '3xl', 
    3: '2xl',
    4: 'xl',
    5: 'lg',
    6: 'base'
  };
  
  const headingSize = size || defaultSizes[level];
  
  // Base classes for all headings
  const baseClasses = 'font-display font-bold leading-tight text-text-primary';
  
  // Size-specific classes (using CSS variables for fluid sizing)
  const sizeClasses = {
    'xs': 'text-fluid-xs',
    'sm': 'text-fluid-sm',
    'base': 'text-fluid-base',
    'lg': 'text-fluid-lg',
    'xl': 'text-fluid-xl',
    '2xl': 'text-fluid-2xl',
    '3xl': 'text-fluid-3xl',
    '4xl': 'text-fluid-4xl'
  };
  
  // Gradient text classes
  const gradientClasses = gradient ? 'gradient-text' : '';
  
  // Combine all classes
  const headingClasses = `${baseClasses} ${sizeClasses[headingSize]} ${gradientClasses} ${className}`;
</script>

{#if level === 1}
  <h1 class={headingClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </h1>
{:else if level === 2}
  <h2 class={headingClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </h2>
{:else if level === 3}
  <h3 class={headingClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </h3>
{:else if level === 4}
  <h4 class={headingClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </h4>
{:else if level === 5}
  <h5 class={headingClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </h5>
{:else if level === 6}
  <h6 class={headingClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </h6>
{/if}

<style>
  h1, h2, h3, h4, h5, h6 {
    /* Alt-paper typography styling */
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    color: var(--text-primary);
    letter-spacing: -0.025em;
  }
</style>