<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  
  interface Props extends HTMLAnchorAttributes {
    href: string;
    class?: string;
    external?: boolean;
    underline?: boolean;
    children?: import('svelte').Snippet;
  }
  
  let {
    href,
    class: className = '',
    external = false,
    underline = true,
    children,
    target,
    rel,
    ...restProps
  }: Props = $props();
  
  // Auto-detect external links
  const isExternal = external || href.startsWith('http') || href.startsWith('//');
  
  // Set appropriate target and rel for external links
  const linkTarget = target || (isExternal ? '_blank' : undefined);
  const linkRel = rel || (isExternal ? 'noopener noreferrer' : undefined);
  
  // Base classes for links
  const baseClasses = 'transition-colors duration-default';
  
  // Underline classes
  const underlineClasses = underline 
    ? 'underline decoration-1 underline-offset-2 hover:decoration-2' 
    : 'no-underline hover:underline hover:decoration-1 hover:underline-offset-2';
  
  // Combine all classes
  const linkClasses = `${baseClasses} ${underlineClasses} ${className}`;
</script>

<a
  {href}
  class={linkClasses}
  target={linkTarget}
  rel={linkRel}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else}
    {href}
  {/if}
</a>

<style>
  a {
    /* Alt-paper link styling */
    color: var(--alt-primary);
    font-weight: 500;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
  
  a:hover {
    color: var(--alt-secondary);
    text-decoration-thickness: 2px;
  }
  
  /* Focus styles for accessibility */
  a:focus-visible {
    outline: 2px solid var(--alt-primary);
    outline-offset: 2px;
    border-radius: 2px;
  }
</style>