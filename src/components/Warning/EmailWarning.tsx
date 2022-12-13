import React from 'react';

import CommonWarning from './CommonWarning';

import { Validator } from 'src/utils/Validators';

import { VALID } from 'src/constants/valid';

interface Props {
  value: string;
}

const NO_AT_IN_EMAIL_WARNING = 'email에 @가 포함되어있지 않습니다.';

function EmailWarning({ value }: Props) {
  return (
    <CommonWarning
      validator={Validator.email}
      value={value}
      target={VALID.NOT_INCLUDE_AT}
      text={NO_AT_IN_EMAIL_WARNING}
    />
  );
}

export default EmailWarning;
