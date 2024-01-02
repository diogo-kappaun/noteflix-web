import React from 'react'
import ReactDOM from 'react-dom/client'
import { Start } from './Pages/Start'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-kashmir-50 dark:bg-kashmir-950 h-screen font-poppins">
      <Start />
    </div>
  </React.StrictMode>,
)
