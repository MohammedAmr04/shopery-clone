import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UiProvider from './services/context/UiProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UiProvider>
    <App />
    </UiProvider>
  </StrictMode>,
)
