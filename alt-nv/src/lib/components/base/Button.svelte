<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  
  // Button variants
  type ButtonVariant = 'primary' | 'accent' | 'ghost';
  type ButtonSize = 'sm' | 'md' | 'lg';
  
  interface Props extends HTMLButtonAttributes {
    variant?: ButtonVariant;
    size?: ButtonSize;
    class?: string;
    children?: import('svelte').Snippet;
  }
  
  let {
    variant = 'primary',
    size = 'md',
    class: className = '',
    children,
    disabled = false,
    type = 'button',
    ...restProps
  }: Props = $props();
  
  // Base classes for all buttons
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-default cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    ghost: 'bg-transparent border-2 border-transparent text-text-primary hover:border-alt-primary hover:bg-surface-hover'
  };
  
  // Size-specific classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

<button
  {type}
  {disabled}
  class={buttonClasses}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</button>

<style>
  button {
    /* Ensure no rounded corners for alt-paper theme */
    border-radius: 0;
    /* Apply letter spacing for better readability */
    letter-spacing: 0.025em;
  }
  
  /* Focus styles for accessibility */
  button:focus-visible {
    outline: 2px solid var(--alt-primary);
    outline-offset: 2px;
  }
</style>