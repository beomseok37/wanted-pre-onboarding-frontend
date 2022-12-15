import React from 'react';

import CommonWarning from './CommonWarning';

import { Validator } from 'src/utils/Validators';

import { VALID } from 'src/constants/valid';

interface Props {
  value: string;
}

function SignInWarning({ value }: Props) {
  return (
    <>
      {value && (
        <CommonWarning
          validator={Validator.axios}
          value={value}
          target={
            VALID.ALREADY_EXIST_EMAIL |
            VALID.NOT_EXIST_EMAIL |
            VALID.UNAUTHORIZED
          }
          text={value}
          isDisappear
        />
      )}
    </>
  );
}

export default SignInWarning;
