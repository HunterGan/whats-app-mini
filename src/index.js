import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import initApp from './init.jsx';

const runApp = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = await initApp();
  root.render(<React.StrictMode>{app}</React.StrictMode>);
};

runApp();
