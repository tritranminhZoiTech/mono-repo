import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CustomButton } from './components/CustomButton';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomButton onClick={() => {}}>Test</CustomButton>
  </StrictMode>
);
