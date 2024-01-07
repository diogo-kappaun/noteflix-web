import React from 'react'
import ReactDOM from 'react-dom/client'
import { CreateMovie } from './Pages/CreateMovie'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-zinc-950 font-poppins">
      <CreateMovie />
    </div>
  </React.StrictMode>,
)
