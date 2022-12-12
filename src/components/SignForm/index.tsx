import React, { Dispatch, ReactNode, SetStateAction } from 'react';

import { Column } from 'src/components/grids';
import LabelInput from 'src/components/LabelInput';

import { Wrapper, Title } from './style';

interface Props {
  title: string;
  emailInputBind: [string, Dispatch<SetStateAction<string>>];
  passwordInputBind: [string, Dispatch<SetStateAction<string>>];
  children: ReactNode;
}

function SignForm({
  title,
  emailInputBind,
  passwordInputBind,
  children,
}: Props) {
  return (
    <Wrapper>
      <Column alignItems='center'>
        <Title>{title}</Title>
        <LabelInput type='email' inputBind={emailInputBind} />
        <LabelInput type='password' inputBind={passwordInputBind} />
        {children}
      </Column>
    </Wrapper>
  );
}

export default SignForm;
