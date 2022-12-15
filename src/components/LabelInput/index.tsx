import React, { Dispatch, SetStateAction } from 'react';

import Input from 'src/components/Input';
import EmailWarning from 'src/components/Warning/EmailWarning';
import PasswordWarning from 'src/components/Warning/passwordWarning';
import LabelElement from 'src/components/LabelElement';

interface Props {
  type: 'email' | 'password' | 'todo';
  inputBind: [string, Dispatch<SetStateAction<string>>];
}

function LabelInput({ type, inputBind }: Props) {
  const Warning = (() => {
    if (type === 'email') {
      return <EmailWarning value={inputBind[0]} />;
    } else if (type === 'password') {
      return <PasswordWarning value={inputBind[0]} />;
    } else {
      return null;
    }
  })();
  return (
    <LabelElement
      type={type}
      element={<Input inputBind={inputBind} type={type} />}
      warning={Warning}
    />
  );
}

export default LabelInput;
