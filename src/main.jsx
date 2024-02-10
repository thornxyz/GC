import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from '../components/Footer'
import './index.css'
import LatestOffers from '../components/LatestOffers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LatestOffers />
    <Footer />
  </React.StrictMode>,
)
