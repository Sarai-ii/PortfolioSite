//dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//styling
import './index.css'
import './styles/Global.css'
//components
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
