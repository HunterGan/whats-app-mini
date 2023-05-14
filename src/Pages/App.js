import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import routes from '../routes.js';

import MainPage from './MainPage/MainPage.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.main} element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
