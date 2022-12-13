import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';

import AuthRoute from 'src/components/AuthRoute';
import SignInPage from 'src/pages/signIn';
import SignUpPage from 'src/pages/signUp';
import TodoPage from 'src/pages/todo';

import { globalStyle } from './globalStyle';

function App() {
  return (
    <Fragment>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <AuthRoute
                srcElement={<SignInPage />}
                targetElement={<Navigate to='/todo' />}
                root
              />
            }
          />
          <Route path='/signup' element={<SignUpPage />} />
          <Route
            path='/todo'
            element={
              <AuthRoute
                srcElement={<TodoPage />}
                targetElement={<Navigate to='/' />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
