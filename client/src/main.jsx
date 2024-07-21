import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="biswarup-ghosh.jp.auth0.com"
    clientId="lMbcL3HhLZbGLp1PHWCYeQnAhgLSz20z"
    authorizationParams={{
      redirect_uri:"https://assignment-work.vercel.app"
    }}
  >
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </Auth0Provider>
)
