import React, { Dispatch, SetStateAction } from 'react';

import { Row, Column } from 'src/components/grids';
import Input from 'src/components/Input';
import EmailWarning from '../Warning/EmailWarning';
import PasswordWarning from '../Warning/passwordWarning';

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
    <Column height={100}>
      <Row
        width={350}
        alignItems='center'
        justifyContent='space-between'
        padding={10}
      >
        <p>{type}</p>
        <Input inputBind={inputBind} type={type} />
      </Row>
      {Warning}
    </Column>
  );
}

export default LabelInput;
