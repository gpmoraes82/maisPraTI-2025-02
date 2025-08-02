import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './components/App.jsx'
import Greeting from './components/Greeting.jsx'
import ComponenteClasse from './components/ComponenteClasse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting name='Gabriel' />
    <ComponenteClasse />
  </StrictMode>,
)
