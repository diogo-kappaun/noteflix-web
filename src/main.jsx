import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './Pages/SingIn'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="font-poppins h-screen bg-zinc-950">
      <SignIn />
    </div>
  </React.StrictMode>,
)
