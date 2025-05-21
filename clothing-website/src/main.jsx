import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { TourProvider } from './context/TourContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TourProvider>
        <App />
      </TourProvider>
    </BrowserRouter>
  </React.StrictMode>
);

