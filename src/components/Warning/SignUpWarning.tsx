import React from 'react';

import CommonWarning from './CommonWarning';

import { Validator } from 'src/utils/Validators';

import { VALID } from 'src/constants/valid';

interface Props {
  value: string;
}

const EMAIL_ALREADY_EXIST_WARNING = '동일한 이메일이 이미 존재합니다.';

function SignUpWarning({ value }: Props) {
  return (
    <CommonWarning
      validator={Validator.axios}
      value={value}
      target={VALID.ALREADY_EXIST_EMAIL}
      text={EMAIL_ALREADY_EXIST_WARNING}
      isDisappear
    />
  );
}

export default SignUpWarning;
