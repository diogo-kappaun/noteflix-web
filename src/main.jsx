import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './Pages/SignIn'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-200 font-poppins dark:bg-zinc-800">
      <SignIn />
    </div>
  </React.StrictMode>,
)
