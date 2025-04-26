import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className="relative bg-black min-h-screen">
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to bottom, white 1px, transparent 15px)] [background-size:16px_16px]"></div>
        {/* Vertical Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to right, white 1px, transparent 15px)] [background-size:16px_16px]"></div>
      </div>

      {/* Main Content */}
      <Home />
    </div>




  </React.StrictMode>,
)
