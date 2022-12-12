import React, { useMemo } from 'react';

import { emailValidator, passwordValidator } from 'src/utils/validators';

import { VALID } from 'src/constants/valid';

import { P } from './style';

interface Props {
  type: 'email' | 'password';
  value: string;
}

const NO_AT_IN_EMAIL_WARNING = 'email에 @가 포함되어있지 않습니다.';
const PASSWORD_LENGTH_BELOW_STANDARD_WARNING =
  'password가 8글자 이상이어야 합니다.';

function Warning({ type, value }: Props) {
  const warningText = useMemo(() => {
    if (type === 'email') {
      return emailValidator(value) === VALID.NOT_INCLUDE_AT
        ? NO_AT_IN_EMAIL_WARNING
        : '';
    } else {
      return passwordValidator(value) === VALID.BELOW_STANDARD
        ? PASSWORD_LENGTH_BELOW_STANDARD_WARNING
        : '';
    }
  }, [value]);
  const activate = useMemo(() => !!warningText, [warningText]);
  return <P activate={activate}>{warningText}</P>;
}

export default Warning;
