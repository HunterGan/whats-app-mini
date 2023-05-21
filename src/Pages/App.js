import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet, Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks/index.js';

import routes from '../routes.js';

import MainPage from './MainPage/MainPage.js';
import LoginPage from './LoginPage/LoginPage.js';

const RequireAuth = () => {
  const auth = useAuth();
  return (
    auth.user ? <Outlet /> : <Navigate to={routes.login} />
  );
};

const App = () => (
  <div className="app">
    <div className="app_body">
      <BrowserRouter>
        <Routes>
          <Route path={routes.main} element={<RequireAuth />}>
            <Route path="" element={<MainPage />} />
          </Route>
          <Route path={routes.login} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
