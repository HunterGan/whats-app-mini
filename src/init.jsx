import React from 'react';
import './index.css';

import App from './Pages/App.js';

export default async () => {
  const vdom = (
    <div className="app">
      <div className="app_body">
        <App />
      </div>
    </div>
  );
  return vdom;
};
