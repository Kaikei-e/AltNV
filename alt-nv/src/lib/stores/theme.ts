import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Theme types
export type Theme = 'vaporwave' | 'liquid-beige' | 'alt-paper';

// Theme configuration
export interface ThemeConfig {
  name: Theme;
  displayName: string;
  description: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}

// Available themes
export const THEMES: Record<Theme, ThemeConfig> = {
  'vaporwave': {
    name: 'vaporwave',
    displayName: 'Vaporwave',
    description: 'Neon cyber aesthetic',
    primaryColor: '#ff006e',
    backgroundColor: '#1a1a2e',
    textColor: '#ffffff',
  },
  'liquid-beige': {
    name: 'liquid-beige',
    displayName: 'Liquid Beige',
    description: 'Earthy luxury aesthetic',
    primaryColor: '#b85450',
    backgroundColor: '#e8ded1',
    textColor: '#1a1611',
  },
  'alt-paper': {
    name: 'alt-paper',
    displayName: 'Alt Paper',
    description: 'Clean newspaper aesthetic',
    primaryColor: '#2F4F4F',
    backgroundColor: '#ffffff',
    textColor: '#1a1a1a',
  },
};

// Default theme
const DEFAULT_THEME: Theme = 'alt-paper';

// Get initial theme from localStorage or system preference
function getInitialTheme(): Theme {
  if (!browser) return DEFAULT_THEME;
  
  try {
    // Check localStorage first
    const stored = localStorage.getItem('alt-nv-theme');
    if (stored && Object.keys(THEMES).includes(stored)) {
      return stored as Theme;
    }
    
    // Check system preference (detect dark mode)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'vaporwave'; // Use vaporwave for dark preference
    }
    
    return DEFAULT_THEME;
  } catch (error) {
    console.warn('Failed to get initial theme:', error);
    return DEFAULT_THEME;
  }
}

// Create theme store
function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>(getInitialTheme());
  
  return {
    subscribe,
    
    // Set theme
    setTheme: (theme: Theme) => {
      if (!Object.keys(THEMES).includes(theme)) {
        console.warn(`Invalid theme: ${theme}`);
        return;
      }
      
      set(theme);
      
      // Persist to localStorage
      if (browser) {
        try {
          localStorage.setItem('alt-nv-theme', theme);
        } catch (error) {
          console.warn('Failed to persist theme:', error);
        }
      }
    },
    
    // Toggle between themes
    toggleTheme: () => {
      update(currentTheme => {
        const themeKeys = Object.keys(THEMES) as Theme[];
        const currentIndex = themeKeys.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        const nextTheme = themeKeys[nextIndex];
        
        // Persist to localStorage
        if (browser) {
          try {
            localStorage.setItem('alt-nv-theme', nextTheme);
          } catch (error) {
            console.warn('Failed to persist theme:', error);
          }
        }
        
        return nextTheme;
      });
    },
    
    // Reset to default theme
    resetTheme: () => {
      set(DEFAULT_THEME);
      
      if (browser) {
        try {
          localStorage.removeItem('alt-nv-theme');
        } catch (error) {
          console.warn('Failed to remove theme from storage:', error);
        }
      }
    },
    
    // Get current theme config
    getConfig: (theme: Theme): ThemeConfig => THEMES[theme],
  };
}

export const themeStore = createThemeStore();

// Theme application helper
export function applyTheme(theme: Theme) {
  if (!browser) return;
  
  try {
    // Update data-style attribute on body
    document.body.setAttribute('data-style', theme);
    
    // Update CSS custom properties dynamically if needed
    const themeConfig = THEMES[theme];
    const root = document.documentElement;
    
    // Apply theme-specific CSS variables
    switch (theme) {
      case 'vaporwave':
        root.style.setProperty('--alt-primary', '#ff006e');
        root.style.setProperty('--alt-secondary', '#8338ec');
        root.style.setProperty('--alt-tertiary', '#3a86ff');
        break;
      case 'liquid-beige':
        root.style.setProperty('--alt-primary', '#b85450');
        root.style.setProperty('--alt-secondary', '#7c9070');
        root.style.setProperty('--alt-tertiary', '#d4a574');
        break;
      case 'alt-paper':
        root.style.setProperty('--alt-primary', '#2F4F4F');
        root.style.setProperty('--alt-secondary', '#696969');
        root.style.setProperty('--alt-tertiary', '#808080');
        break;
    }
    
    // Dispatch custom event for theme change
    window.dispatchEvent(new CustomEvent('themechange', { 
      detail: { theme, config: themeConfig } 
    }));
    
  } catch (error) {
    console.warn('Failed to apply theme:', error);
  }
}

// Auto-apply theme changes
if (browser) {
  themeStore.subscribe(theme => {
    applyTheme(theme);
  });
  
  // Listen for system theme changes
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually selected a theme
    const hasStoredTheme = localStorage.getItem('alt-nv-theme');
    if (!hasStoredTheme) {
      themeStore.setTheme(e.matches ? 'vaporwave' : 'alt-paper');
    }
  });
}