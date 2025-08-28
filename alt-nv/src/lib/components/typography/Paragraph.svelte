<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  
  type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  type TextVariant = 'primary' | 'secondary' | 'muted';
  
  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    size?: TextSize;
    variant?: TextVariant;
    class?: string;
    children?: import('svelte').Snippet;
  }
  
  let {
    size = 'base',
    variant = 'secondary',
    class: className = '',
    children,
    ...restProps
  }: Props = $props();
  
  // Base classes for paragraphs
  const baseClasses = 'font-primary leading-paper m-0';
  
  // Size-specific classes (using CSS variables for fluid sizing)
  const sizeClasses = {
    'xs': 'text-fluid-xs',
    'sm': 'text-fluid-sm', 
    'base': 'text-fluid-base',
    'lg': 'text-fluid-lg',
    'xl': 'text-fluid-xl'
  };
  
  // Text variant classes
  const variantClasses = {
    'primary': 'text-text-primary',
    'secondary': 'text-text-secondary', 
    'muted': 'text-text-muted'
  };
  
  // Combine all classes
  const paragraphClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
</script>

<p class={paragraphClasses} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</p>

<style>
  p {
    /* Alt-paper paragraph styling */
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.7;
    font-family: var(--font-primary);
  }
</style>