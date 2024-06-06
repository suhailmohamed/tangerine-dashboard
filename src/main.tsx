import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <Toaster
      position="bottom-right"
      toastOptions={{
        className: 'bg-neutral-800 text-white text-sm font-normal'
      }}
      reverseOrder={false}
    />
  </React.StrictMode>,
)
