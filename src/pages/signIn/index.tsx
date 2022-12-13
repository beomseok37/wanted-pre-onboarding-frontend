/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-undef */
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { Row, Column } from 'src/components/grids';
import { NavigateButton, Button } from 'src/components/Button';
import SignForm from 'src/components/SignForm';
import SignInWarning from 'src/components/Warning/SignInWarning';

import { Validator } from 'src/utils/Validators';
import { Fetcher } from 'src/utils/Fetcher';

import { VALID } from 'src/constants/valid';

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [axiosFailMessage, setAxiosFailMessage] = useState('');

  const isSignInDisable = useMemo(() => {
    if (
      Validator.email(email) === VALID.INCLUDE_AT &&
      Validator.password(password) === VALID.EXCEEDING_STANDARD
    ) {
      return false;
    } else {
      return true;
    }
  }, [email, password]);

  const handleClickSignIn = async () => {
    setAxiosFailMessage('');
    try {
      const { access_token } = await Fetcher.signIn({
        path: '/auth/signin',
        data: { email, password },
      });
      window.localStorage.setItem('access_token', access_token);
      navigate('/todo');
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err.response?.data;
        setAxiosFailMessage(message);
      }
    }
  };

  return (
    <SignForm
      title='SignIn'
      emailInputBind={[email, setEmail]}
      passwordInputBind={[password, setPassword]}
    >
      <Column alignItems='center' height={70}>
        <Row
          alignItems='center'
          width={300}
          justifyContent='space-evenly'
          padding={10}
        >
          <NavigateButton href='/signup'>SignUp</NavigateButton>
          <Button onClick={handleClickSignIn} disabled={isSignInDisable}>
            SignIn
          </Button>
        </Row>
        <SignInWarning value={axiosFailMessage} />
      </Column>
    </SignForm>
  );
}

export default SignInPage;
