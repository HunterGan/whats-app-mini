import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import routes from '../routes.js';

import MainPage from './MainPage/MainPage.js';

const App = () => (
  <div className="app">
    <div className="app_body">
      <BrowserRouter>
        <Routes>
          <Route path={routes.main} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
