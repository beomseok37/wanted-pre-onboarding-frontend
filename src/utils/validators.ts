import { VALID } from 'src/constants/valid';

const Validator = {
  email(email: string) {
    if (!email) {
      return VALID.EMPTY;
    } else if (email.includes('@')) {
      return VALID.INCLUDE_AT;
    } else {
      return VALID.NOT_INCLUDE_AT;
    }
  },
  password(password: string) {
    if (!password) {
      return VALID.EMPTY;
    } else if (password.length >= 8) {
      return VALID.EXCEEDING_STANDARD;
    } else {
      return VALID.BELOW_STANDARD;
    }
  },
  axios(message: string) {
    if (!message) {
      return VALID.EMPTY;
    } else if (message === '동일한 이메일이 이미 존재합니다.') {
      return VALID.ALREADY_EXIST_EMAIL;
    } else if (message === '해당 사용자가 존재하지 않습니다.') {
      return VALID.NOT_EXIST_EMAIL;
    } else {
      return VALID.UNAUTHORIZED;
    }
  },
};

export { Validator };
