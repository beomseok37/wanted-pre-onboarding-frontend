import React, { useMemo, useState } from 'react';

import { Row } from 'src/components/grids';
import { NavigateButton, Button } from 'src/components/Button';
import SignForm from 'src/components/SignForm';

import { emailValidator, passwordValidator } from 'src/utils/validators';

import { VALID } from 'src/constants/valid';

function SignInPage() {
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

  const handleClickSignIn = () => {};

  return (
    <SignForm
      title='SignIn'
      emailInputBind={[email, setEmail]}
      passwordInputBind={[password, setPassword]}
    >
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
    </SignForm>
  );
}

export default SignInPage;
