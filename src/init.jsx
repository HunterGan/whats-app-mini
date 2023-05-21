import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import reducer from './slices/index.js';

import App from './Pages/App.js';

export default async () => {
  const store = configureStore({
    reducer,
  });
  const vdom = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  return vdom;
};
