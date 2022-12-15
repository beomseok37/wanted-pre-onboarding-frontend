import React from 'react';

import CommonWarning from './CommonWarning';

import { Validator } from 'src/utils/Validators';

import { VALID } from 'src/constants/valid';

interface Props {
  value: string;
}

function SignUpWarning({ value }: Props) {
  return (
    <CommonWarning
      validator={Validator.axios}
      value={value}
      target={VALID.ALREADY_EXIST_EMAIL}
      text={value}
      isDisappear
    />
  );
}

export default SignUpWarning;
