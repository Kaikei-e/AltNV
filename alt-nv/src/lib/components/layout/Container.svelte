<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  
  type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  interface Props extends HTMLAttributes<HTMLDivElement> {
    size?: ContainerSize;
    class?: string;
    children?: import('svelte').Snippet;
  }
  
  let {
    size = 'lg',
    class: className = '',
    children,
    ...restProps
  }: Props = $props();
  
  // Base classes for container
  const baseClasses = 'w-full mx-auto px-4';
  
  // Size-specific max-width classes
  const sizeClasses = {
    'sm': 'max-w-2xl',    // 672px
    'md': 'max-w-4xl',    // 896px  
    'lg': 'max-w-6xl',    // 1152px (1200px from original CSS)
    'xl': 'max-w-7xl',    // 1280px
    'full': 'max-w-none'  // No max width
  };
  
  // Combine all classes
  const containerClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;
</script>

<div class={containerClasses} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  div {
    /* Container styling matching the original CSS */
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  /* Responsive padding */
  @media (max-width: 768px) {
    div {
      padding: 0 var(--space-3);
    }
  }
</style>