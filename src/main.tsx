import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import store from './store/index'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
