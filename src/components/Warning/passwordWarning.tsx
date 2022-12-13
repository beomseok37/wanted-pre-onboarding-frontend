import React from 'react';

import CommonWarning from './CommonWarning';

import { Validator } from 'src/utils/Validators';

import { VALID } from 'src/constants/valid';

interface Props {
  value: string;
}

const PASSWORD_LENGTH_BELOW_STANDARD_WARNING =
  'password가 8글자 이상이어야 합니다.';

function PasswordWarning({ value }: Props) {
  return (
    <CommonWarning
      validator={Validator.password}
      value={value}
      target={VALID.BELOW_STANDARD}
      text={PASSWORD_LENGTH_BELOW_STANDARD_WARNING}
    />
  );
}

export default PasswordWarning;
