# Base UI Components

Shared component library providing reusable UI components for all applications in the monorepo.

## Features

- **Reusable Components**: Consistent UI components across applications
- **TypeScript Support**: Full type safety and IntelliSense
- **Ant Design Integration**: Built on top of Ant Design system
- **Source-First**: Direct source imports for better development experience
- **Design System**: Consistent styling and behavior patterns

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

## Components

### CustomButton

A customizable button component with variants.

```tsx
import { CustomButton } from '@my-monorepo/base-ui-components';

<CustomButton onClick={() => console.log('clicked')} variant="primary">
  Click me
</CustomButton>;
```

**Props:**

- `onClick`: Click handler function
- `children`: Button content
- `variant`: 'primary' | 'secondary' (default: 'primary')

## Development

```bash
# Start component development server
pnpm dev

# Build library
pnpm build

# Run tests (if available)
pnpm test
```

## Usage

### In Applications

```tsx
import { CustomButton } from '@my-monorepo/base-ui-components';

function MyComponent() {
  return <CustomButton onClick={handleClick}>My Button</CustomButton>;
}
```

### Development Import

For development, the library uses source imports:

```tsx
// Resolves to: libs/base-ui-components/src/index.ts
import { CustomButton } from '@my-monorepo/base-ui-components';
```

## Structure

```
src/
├── index.ts              # Main export file
├── components/           # Component directory
│   └── CustomButton.tsx  # Button component
├── styles/              # Shared styles (if any)
└── utils/               # Utility functions (if any)
```

## Adding New Components

1. Create component in `src/components/`
2. Export from `src/index.ts`
3. Add TypeScript types
4. Document usage and props

Example:

```tsx
// src/components/MyNewComponent.tsx
import React from 'react';

interface MyNewComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyNewComponent: React.FC<MyNewComponentProps> = ({
  title,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};
```

```ts
// src/index.ts
export * from './components/CustomButton';
export * from './components/MyNewComponent';
```

## Configuration

### Package Exports

```json
{
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "import": "./src/index.ts"
    }
  }
}
```

### Vite Config

- **Development**: Standard library development
- **Production**: Library build with externalized dependencies

## Design Principles

1. **Consistency**: All components follow the same design patterns
2. **Reusability**: Components are generic and configurable
3. **Type Safety**: Full TypeScript support with proper interfaces
4. **Performance**: Lightweight and tree-shakeable
5. **Documentation**: Clear props and usage examples

## Dependencies

- **React 19**: Frontend framework
- **TypeScript**: Type safety
- **Ant Design v5**: Base UI system (peer dependency)
