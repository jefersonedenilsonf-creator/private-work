import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Form } from './components/Form'
// import { Grid } from './components/Grid'
// import { Flex } from './components/Flex'
 import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <App />
  </StrictMode>,
)
//  <Form /> <Flex /> <Grid /> 