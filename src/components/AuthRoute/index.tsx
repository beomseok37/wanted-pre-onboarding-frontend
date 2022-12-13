/* eslint-disable no-undef */
import React, { ReactNode } from 'react';

interface Props {
  root?: boolean;
  srcElement: ReactNode;
  targetElement: ReactNode;
}

// root이다 - 인증되면 targetElement,인증 안되면 srcElement
// root아니다 - 인증되면 srcElement, 인증 안되면 targetElement
function AuthRoute({ root, srcElement, targetElement }: Props) {
  const authenticatedElement = root ? targetElement : srcElement;
  const unauthenticatedElement = root ? srcElement : targetElement;
  return (
    <>
      {window.localStorage.getItem('access_token')
        ? authenticatedElement
        : unauthenticatedElement}
    </>
  );
}

AuthRoute.defaultProps = {
  root: false,
};

export default AuthRoute;
