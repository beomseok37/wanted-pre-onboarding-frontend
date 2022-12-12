import { VALID } from 'src/constants/valid';

const emailValidator = (email: string) => {
  if (!email) {
    return VALID.EMPTY;
  } else if (email.includes('@')) {
    return VALID.INCLUDE_AT;
  } else {
    return VALID.NOT_INCLUDE_AT;
  }
};

const passwordValidator = (password: string) => {
  if (!password) {
    return VALID.EMPTY;
  } else if (password.length >= 8) {
    return VALID.EXCEEDING_STANDARD;
  } else {
    return VALID.BELOW_STANDARD;
  }
};

export { emailValidator, passwordValidator };
