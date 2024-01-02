import React from 'react'
import ReactDOM from 'react-dom/client'
import { Start } from './Pages/Start'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-screen bg-gradient-to-tr from-kashmir-200 to-kashmir-50 font-poppins dark:from-kashmir-950 dark:to-kashmir-800">
      <Start />
    </div>
  </React.StrictMode>,
)
