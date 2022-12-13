import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Column, Row } from 'src/components/grids';
import { Button, NavigateButton } from 'src/components/Button';
import SignForm from 'src/components/SignForm';
import SignUpWarning from 'src/components/Warning/SignUpWarning';

import { Validator } from 'src/utils/Validators';
import { Fetcher } from 'src/utils/Fetcher';

import { VALID } from 'src/constants/valid';

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [axiosFailMessage, setAxiosFailMessage] = useState('');

  const isSignUpDisable = useMemo(() => {
    if (
      Validator.email(email) === VALID.INCLUDE_AT &&
      Validator.password(password) === VALID.EXCEEDING_STANDARD
    ) {
      return false;
    } else {
      return true;
    }
  }, [email, password]);

  const resolve = () => {
    navigate('/signin');
  };

  const reject = (message: string) => {
    setAxiosFailMessage(message);
  };

  const handleClickSignUp = () => {
    setAxiosFailMessage('');
    Fetcher.signUp({
      path: '/auth/signup',
      resolve,
      reject,
      data: { email, password },
    });
  };

  return (
    <SignForm
      title='SignUp'
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
          <NavigateButton href='/signin'>Return</NavigateButton>
          <Button onClick={handleClickSignUp} disabled={isSignUpDisable}>
            SignUp
          </Button>
        </Row>
        <SignUpWarning value={axiosFailMessage} />
      </Column>
    </SignForm>
  );
}

export default SignUpPage;
