/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
/// import { useFormik } from 'formik';
import './LoginPage.css';
import EmptyChatFiller from '../../components/EmptyChatFiller';

const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [authFailed, setAuthFailed] = useState(true);
  console.log('login page');
  return (
    <div className="login__container">
      <div className="login__data-panel">
        <form onSubmit={() => console.log('submit')}>
          <h1>Login</h1>
          <input name="greenID" type="login" placeholder="Please enter ID" />
          <input name="greenToken" type="login" placeholder="Please enter ID" />
          {authFailed && <label htmlFor="greenToken">authFailed</label>}
          <button type="submit">Enter</button>
        </form>
      </div>
      <div className="login__description-panel">
        <EmptyChatFiller>
          <p>For starting to use this app please enter your GreenApi id and token</p>
        </EmptyChatFiller>
      </div>
    </div>
  );
};
export default LoginPage;
