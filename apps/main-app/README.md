# Main App

The main shell application that provides the overall layout and routing for the monorepo.

## Features

- **Application Shell**: Provides header, navigation, and footer layout
- **Routing**: React Router v7 configuration for all pages
- **Micro-Frontend Integration**: Lazy loads and integrates micro-frontends
- **Ant Design Integration**: Consistent theming and UI components

## Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Structure

```
src/
├── main.jsx           # Application entry point
├── App.jsx            # Root component (if exists)
└── components/        # Main app specific components
```

## Routes

- `/` - Home page
- `/products` - Product page (from product micro-frontend)

## Dependencies

- **React 19**: Frontend framework
- **React Router v7**: Client-side routing
- **Ant Design v5**: UI component library
- **@my-monorepo/product**: Product page micro-frontend

## Integration

The main app integrates micro-frontends through:

1. **Lazy Loading**: `const ProductPage = lazy(() => import('@my-monorepo/product'))`
2. **Routing**: Route configuration with React Router
3. **Layout Wrapping**: Provides consistent layout around micro-frontends

## Configuration

- **Vite**: Standard application configuration (no library mode)
- **TypeScript**: Full TypeScript support
- **ESLint**: Code quality and consistency
