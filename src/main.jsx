import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-zinc-950 font-poppins">
      <Routes />
    </div>
  </React.StrictMode>,
)
