# Product Page

A micro-frontend that provides product listing and management functionality. Can run independently or be integrated into the main application.

## Features

- **Dual Mode Operation**: Standalone development + main app integration
- **TypeScript Implementation**: Full type safety
- **Product Management**: Display and interact with product data
- **Ant Design Integration**: Consistent UI components
- **Shared Components**: Uses base-ui-components library

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Development Modes

### Standalone Mode

```bash
# Run independently with development layout
pnpm dev
# → http://localhost:5174
```

**Features:**

- Development-friendly wrapper layout
- Visual container with title
- Perfect for component development and review
- No interference with main app layout

### Integrated Mode

Used by main app through import:

```jsx
const ProductPage = lazy(() => import('@my-monorepo/product'));
```

**Features:**

- Seamless integration with main app layout
- No wrapper - pure component rendering
- Full application context and navigation

## Structure

```
src/
├── main.tsx           # Entry point + development wrapper
├── App.tsx            # Product page component
├── components/        # Page-specific components
└── assets/           # Static assets
```

## Key Components

- **App.tsx**: Main product page component
- **main.tsx**: Handles dual-mode rendering (standalone vs integrated)

## Dependencies

- **React 19**: Frontend framework
- **TypeScript**: Type safety
- **Ant Design v5**: UI components
- **@my-monorepo/base-ui-components**: Shared components

## Configuration

### Vite Config

Smart configuration that adapts to mode:

- **Development**: Standard app mode for standalone development
- **Production**: Library mode for consumption by other apps

### Package Exports

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

This enables:

- Clean imports: `import('@my-monorepo/product')`
- Source-first development
- Better development experience

## Integration Example

```jsx
// In main app
import { lazy, Suspense } from 'react';

const ProductPage = lazy(() => import('@my-monorepo/product'));

function App() {
  return (
    <Routes>
      <Route
        path="/products"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
```

## Development Workflow

1. **Component Development**: Run standalone mode for focused development
2. **Integration Testing**: Test within main app context
3. **Feature Development**: Iterate between standalone and integrated modes
4. **Production**: Export clean component for main app consumption
