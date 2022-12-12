import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Input } from './style';

interface Props {
  inputBind: [string, Dispatch<SetStateAction<string>>];
  type?: string;
}

function InputCommon({ inputBind, type }: Props) {
  const [value, setValue] = inputBind;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={handleInput} type={type} />;
}

InputCommon.defaultProps = {
  type: 'text',
};

export default InputCommon;
