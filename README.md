# My Ant Design Monorepo

A modern monorepo built with React, TypeScript, Vite, and Ant Design, demonstrating micro-frontend architecture and shared component libraries.

## 🏗️ Architecture

This monorepo follows a micro-frontend pattern with shared libraries:

```
my-antd-monorepo/
├── apps/                    # Applications
│   ├── main-app/           # Main shell application
│   └── product/            # Product page micro-frontend
├── libs/                   # Shared libraries
│   └── base-ui-components/ # Reusable UI components
└── package.json           # Root package configuration
```

## 🚀 Features

- **Monorepo Structure**: Organized with pnpm workspaces
- **Micro-Frontend Architecture**: Independent, deployable applications
- **Shared Component Library**: Reusable UI components across applications
- **Modern Tech Stack**: React 19, TypeScript, Vite, Ant Design v5
- **Source-First Development**: Direct source imports for better DX
- **Independent Development**: Each app can run standalone

## 📦 Packages

### Applications

#### `apps/main-app`

The main shell application that provides:

- Application layout (header, navigation, footer)
- Routing configuration
- Integration of micro-frontends
- Ant Design theming and configuration

**Features:**

- React Router v7 for navigation
- Ant Design v5 UI framework
- Lazy loading of micro-frontends
- Responsive layout

#### `apps/product`

Product page micro-frontend that can run:

- **Standalone**: For independent development and testing
- **Integrated**: Within the main app with full layout

**Features:**

- TypeScript implementation
- Product listing and management
- Integration with shared UI components
- Dual-mode operation (standalone/integrated)

### Libraries

#### `libs/base-ui-components`

Shared component library providing:

- Custom UI components
- Consistent design system
- TypeScript definitions
- Ant Design integration

## 🛠️ Tech Stack

- **Package Manager**: pnpm (with workspaces)
- **Build Tool**: Vite
- **Frontend Framework**: React 19
- **Language**: TypeScript
- **UI Framework**: Ant Design v5
- **Routing**: React Router v7
- **Styling**: Ant Design + CSS

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-antd-monorepo

# Install dependencies for all packages
pnpm install
```

### Development

#### Run All Applications

```bash
# Start main app (includes all micro-frontends)
cd apps/main-app
pnpm dev
# → http://localhost:5173
```

#### Run Applications Independently

```bash
# Product page standalone
cd apps/product
pnpm dev
# → http://localhost:5174 (without main app layout)

# Base UI components development
cd libs/base-ui-components
pnpm dev
# → Component library development server
```

### Building

```bash
# Build all packages
pnpm run build

# Build specific package
cd apps/main-app
pnpm build
```

## 🏛️ Architecture Decisions

### Source-First Approach

This monorepo uses a "source-first" approach where:

- Development imports source code directly (not built bundles)
- Better development experience with source maps and hot reload
- Single React instance across all packages
- Avoids React context conflicts

### Package Exports Strategy

Each package provides dual exports:

```json
{
  "exports": {
    ".": {
      "types": "./src/main.tsx",
      "import": "./src/main.tsx"
    }
  }
}
```

This allows:

- Clean import syntax: `import('@my-monorepo/product')`
- Direct source imports during development
- Optional built library exports for production

### Micro-Frontend Pattern

- **Shell Application** (`main-app`): Provides layout and routing
- **Micro-Frontends** (`product`): Independent, focused applications
- **Shared Libraries** (`base-ui-components`): Common UI components

Benefits:

- Independent development and deployment
- Team autonomy
- Technology flexibility
- Shared design system

## 🔧 Development Workflow

### Adding New Micro-Frontend

1. Create new app in `apps/` directory
2. Add to workspace in `pnpm-workspace.yaml`
3. Configure exports in `package.json`
4. Add route in main app
5. Add dependency in main app's `package.json`

### Adding Shared Components

1. Create component in `libs/base-ui-components/src/components/`
2. Export from `libs/base-ui-components/src/index.ts`
3. Use in any app with `import { Component } from '@my-monorepo/base-ui-components'`

### Dependency Management

- **Shared Dependencies**: Defined at root level
- **App-Specific Dependencies**: Defined in individual package.json
- **Version Alignment**: React/React-DOM versions aligned across packages

## 🎯 Use Cases

### Development Scenarios

1. **Component Development**: Work on UI components in isolation
2. **Feature Development**: Develop pages independently
3. **Integration Testing**: Test components within main application
4. **Full Application**: Run complete application with all features

### Deployment Scenarios

1. **Monolithic Deployment**: Deploy main app with all micro-frontends
2. **Independent Deployment**: Deploy individual micro-frontends
3. **Library Publishing**: Publish shared components to npm

## 🤔 Troubleshooting

### Common Issues

#### React Context Errors

If you see `ReactCurrentDispatcher` errors:

- Ensure all packages use the same React version
- Check that source imports are used (not built bundles)
- Verify Vite config doesn't externalize React for applications

#### Import Resolution

If imports don't resolve:

- Check `exports` field in package.json
- Ensure paths point to existing files
- Verify workspace dependencies are declared

#### Port Conflicts

Applications automatically find available ports:

- Main app: starts from 5173
- Product app: starts from 5174
- Components: starts from 5175

## 📚 Scripts Reference

### Root Level

```bash
pnpm install        # Install all dependencies
```

### Application Level

```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm preview       # Preview production build
pnpm lint          # Run ESLint
```

## 🤝 Contributing

1. Follow the established project structure
2. Use TypeScript for new code
3. Follow Ant Design design patterns
4. Test components in both standalone and integrated modes
5. Update this README when adding new packages

## 📄 License

[Your License Here]

---

Built with ❤️ using React, TypeScript, Vite, and Ant Design
