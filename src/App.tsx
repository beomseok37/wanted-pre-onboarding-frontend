import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignInPage from 'src/pages/signIn';
import SignUpPage from 'src/pages/signUp';
import TodoPage from 'src/pages/todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='signIn' />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
