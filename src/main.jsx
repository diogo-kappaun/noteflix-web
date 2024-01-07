import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviePreview } from './Pages/MoviePreview'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-zinc-950 font-poppins">
      <MoviePreview />
    </div>
  </React.StrictMode>,
)
