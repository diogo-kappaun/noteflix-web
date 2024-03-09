import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './Routes'
import './global.css'
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-zinc-950 font-poppins">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
