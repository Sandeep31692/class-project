import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'   // ✅ make sure this line is active
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
