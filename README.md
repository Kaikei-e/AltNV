# AltNV

Native desktop application version of Alt - A modern Tauri + SvelteKit based desktop app

## Overview

AltNV is a lightweight and modern native desktop application built with Rust, Tauri, SvelteKit, and TypeScript. It features a sophisticated newspaper-inspired design system (Alt-Paper theme) with beautiful typography and responsive layouts.

## Tech Stack

### Frontend
- **SvelteKit 2.9+** - Modern web framework
- **Svelte 5.0** - Latest Svelte component framework
- **TypeScript 5.6** - Type safety and IDE support
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Vite 6.0** - Fast build tool

### Backend
- **Tauri 2.0** - Rust-based native app framework
- **Rust** - High-performance, memory-safe systems programming language

### Plugins & Dependencies
- `@tauri-apps/plugin-http` - HTTP communication
- `@tauri-apps/plugin-sql` - SQLite database integration
- `@tauri-apps/plugin-opener` - File/URL opening functionality
- `rss 2.0` - RSS/Atom feed processing
- `reqwest` - HTTP client
- `tokio` - Async runtime

## Features

### 🎨 Theme System
Three beautiful themes included:
- **Vaporwave** - Neon cyber aesthetic
- **Liquid Beige** - Earthy luxury design
- **Alt-Paper** - Clean newspaper-inspired design

### 📱 Responsive Design
- Mobile-first design approach
- Fluid typography scaling
- Beautiful on desktop, tablet, and mobile devices

### ♿ Accessibility
- Proper focus management
- Semantic HTML structure
- Reduced motion support

### 🧩 Component Library
Modular component system:

**Layout**
- `Container` - Responsive container
- `Glass` - Glass effect elements
- `ThemeToggle` - Theme switching button

**Base Elements**
- `Button` - Customizable buttons (primary/accent/ghost)
- `Card` - Card layout component
- `Link` - Link component

**Typography**
- `Heading` - Headings (H1-H6)
- `Paragraph` - Paragraph text
- `GradientText` - Gradient text effects

## Setup

### Prerequisites
- Node.js 24.6.0+ (recommended)
- Rust (latest stable)
- Tauri CLI 2.0+

### Installation

```bash
# Install dependencies
npm install

# Prepare Tauri
npm run tauri deps
```

### Development

```bash
# Start development server
npm run dev

# Or run as Tauri app
npm run tauri dev
```

### Build

```bash
# Production build (web version)
npm run build

# Build native app
npm run tauri build
```

### Code Quality

```bash
# TypeScript type checking
npm run check

# Watch mode
npm run check:watch
```

## Project Structure

```
alt-nv/
├── src/                    # SvelteKit application
│   ├── lib/
│   │   ├── components/     # Reusable components
│   │   │   ├── base/       # Basic UI elements
│   │   │   ├── layout/     # Layout elements
│   │   │   └── typography/ # Typography elements
│   │   └── stores/         # Svelte stores
│   ├── routes/             # Page routing
│   └── app.html            # HTML template
├── src-tauri/              # Tauri backend
│   ├── src/                # Rust source code
│   ├── icons/              # App icons
│   └── tauri.conf.json     # Tauri configuration
└── static/                 # Static files
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## License

MIT

## Author

Created by: Kaikei
