import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <GoogleOAuthProvider clientId="http://837209385029-qmvr5p9rkisprpc8ssoeqggqafnv5jd5.apps.googleusercontent.com/">
   <App />
  </GoogleOAuthProvider>

)
