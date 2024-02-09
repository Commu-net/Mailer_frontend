import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import { GoogleOAuthProvider } from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <GoogleOAuthProvider clientId="837209385029-qmvr5p9rkisprpc8ssoeqggqafnv5jd5">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>

)
