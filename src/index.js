import React from 'react'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { injectStore } from './services/axios';
import './services/i18n';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

injectStore(store);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
