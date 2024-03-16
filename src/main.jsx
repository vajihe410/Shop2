import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//components
import App from './App.jsx'
//styles
import './global.css'
//store
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

      </Provider>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
