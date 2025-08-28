/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Alt-Paper Design Tokens
      colors: {
        // Alt-Paper Color Palette
        'alt-charcoal': '#1a1a1a',
        'alt-slate': '#666666',
        'alt-ash': '#999999',
        
        // Primary Theme Colors (Alt-Paper)
        'alt-primary': '#2F4F4F',    // Dark Slate Gray
        'alt-secondary': '#696969',  // Dim Gray
        'alt-tertiary': '#808080',   // Gray
        
        // Surface Colors (Paper Theme)
        'surface': {
          'bg': '#dedede',
          'border': '#e0e0e0',
          'hover': '#f8f8f8',
        },
        
        // Text Colors
        'text': {
          'primary': '#1a1a1a',
          'secondary': '#333333',
          'muted': '#666666',
        },
        
        // Background Colors
        'app-bg': '#ffffff',
        'paper-white': '#ffffff',
      },
      
      // Typography Scale (Fluid Design)
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.625rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3.375rem)',
      },
      
      // Font Families
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter Variable', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code Variable', 'SF Mono', 'monospace'],
        'display': ['Space Grotesk Variable', 'Inter Variable', 'system-ui', 'sans-serif'],
      },
      
      // Spacing (Fibonacci Sequence)
      spacing: {
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px
        '3': '0.75rem',  // 12px
        '4': '1rem',     // 16px
        '5': '1.25rem',  // 20px
        '6': '1.5rem',   // 24px
        '8': '2rem',     // 32px
        '10': '2.5rem',  // 40px
        '12': '3rem',    // 48px
        '16': '4rem',    // 64px
        '20': '5rem',    // 80px
      },
      
      // Box Shadows (Minimal Paper Style)
      boxShadow: {
        'paper-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'paper-md': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'paper-lg': '0 4px 8px rgba(0, 0, 0, 0.12)',
      },
      
      // Border Radius (Overridden to 0 for alt-paper theme)
      borderRadius: {
        'none': '0',
        'paper': '0', // Alt-paper uses no rounded corners
      },
      
      // Transitions
      transitionDuration: {
        'default': '200ms',
        'smooth': '350ms',
      },
      
      // Line Heights
      lineHeight: {
        'paper': '1.7',
      },
      
      // Letter Spacing
      letterSpacing: {
        'paper': '0.025em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}