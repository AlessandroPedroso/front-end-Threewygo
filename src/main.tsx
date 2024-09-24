import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalSyles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
  </StrictMode>,
)
