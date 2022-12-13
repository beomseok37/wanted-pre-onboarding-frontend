/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';

interface SignProps {
  path: string;
  resolve: (access_token: string) => void;
  reject: (message: string) => void;
  data: {
    email: string;
    password: string;
  };
}

interface SignInProps extends SignProps {
  resolve: (access_token: string) => void;
}

interface SignUpProps extends SignProps {
  resolve: () => void;
}

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Fetcher = {
  signIn: ({ path, resolve, reject, data }: SignInProps) => {
    const { email, password } = data;
    axios
      .post(
        `${SERVER_URL}${path}`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(({ data }) => {
        const { access_token } = data;
        resolve(access_token);
      })
      .catch(({ response }) => {
        const { message } = response.data;
        reject(message);
      });
  },
  signUp: ({ path, resolve, reject, data }: SignUpProps) => {
    const { email, password } = data;
    axios
      .post(
        `${SERVER_URL}${path}`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(resolve)
      .catch(({ response }) => {
        const { message } = response.data;
        reject(message);
      });
  },
};

export { Fetcher };
