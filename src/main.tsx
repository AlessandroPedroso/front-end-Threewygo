import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalSyles.ts'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './routes/routes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouter }/>
    <GlobalStyles/>
  </StrictMode>,
)
