import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PlanContextProvider } from './context/usePlanContext.tsx'
import { StepsContextProvider } from './context/useStepsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StepsContextProvider>
      <PlanContextProvider>
        <App />
      </PlanContextProvider>
    </StepsContextProvider>
  </StrictMode>,
)
