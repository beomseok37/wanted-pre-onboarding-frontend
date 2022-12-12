import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';

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
          <Route path='/' element={<Navigate to='signIn' />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/todo' element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
