import React from 'react';

import CommonWarning from './CommonWarning';

import { Validator } from 'src/utils/Validators';

import { VALID } from 'src/constants/valid';

interface Props {
  value: string;
}

const EMAIL_ALREADY_EXIST_WARNING = '이미 존재하는 이메일입니다';

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
          text={EMAIL_ALREADY_EXIST_WARNING}
          isDisappear
        />
      )}
    </>
  );
}

export default SignInWarning;
