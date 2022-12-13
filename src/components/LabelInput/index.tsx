import React, { Dispatch, SetStateAction } from 'react';

import { Row, Column } from 'src/components/grids';
import Input from 'src/components/Input';
import EmailWarning from '../Warning/EmailWarning';
import PasswordWarning from '../Warning/passwordWarning';

interface Props {
  type: 'email' | 'password';
  inputBind: [string, Dispatch<SetStateAction<string>>];
}

function LabelInput({ type, inputBind }: Props) {
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
      {type === 'email' ? (
        <EmailWarning value={inputBind[0]} />
      ) : (
        <PasswordWarning value={inputBind[0]} />
      )}
    </Column>
  );
}

export default LabelInput;
