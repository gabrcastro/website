import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './view/home/home.tsx'
import './index.css'
import './config/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Home lang={"en-US"} />
  </React.StrictMode>,
)
