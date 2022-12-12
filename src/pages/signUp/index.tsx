import React, { useMemo, useState } from 'react';
import axios from 'axios';

import { Row } from 'src/components/grids';
import { Button } from 'src/components/Button';
import SignForm from 'src/components/SignForm';

import { emailValidator, passwordValidator } from 'src/utils/validators';

import { VALID } from 'src/constants/valid';

// eslint-disable-next-line no-undef
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSignInDisable = useMemo(() => {
    if (
      emailValidator(email) === VALID.INCLUDE_AT &&
      passwordValidator(password) === VALID.EXCEEDING_STANDARD
    ) {
      return false;
    } else {
      return true;
    }
  }, [email, password]);

  const handleClickSignUp = () => {
    axios
      .post(
        `${SERVER_URL}/auth/signup`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(({ data }) => {
        const { access_token } = data;
      });
  };

  return (
    <SignForm
      title='SignUp'
      emailInputBind={[email, setEmail]}
      passwordInputBind={[password, setPassword]}
    >
      <Row
        alignItems='center'
        width={300}
        justifyContent='space-evenly'
        padding={10}
      >
        <Button onClick={handleClickSignUp} disabled={isSignInDisable}>
          SignUp
        </Button>
      </Row>
    </SignForm>
  );
}

export default SignUpPage;
