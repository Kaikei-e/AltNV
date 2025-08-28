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
    padding = 'md',
    children,
    ...restProps
  }: Props = $props();
  
  // Base classes for card
  const baseClasses = 'card transition-all duration-default';
  
  // Hover classes
  const hoverClasses = hover ? 'cursor-pointer' : '';
  
  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
</script>

<div
  class={cardClasses}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  div {
    /* Ensure no rounded corners for alt-paper theme */
    border-radius: 0;
  }
</style>