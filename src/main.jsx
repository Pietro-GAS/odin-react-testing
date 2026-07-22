import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserDetails } from './components/UserDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetails />
  </StrictMode>,
)
