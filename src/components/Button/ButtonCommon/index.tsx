import React, { ReactNode } from 'react';

import { Button } from './style';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function ButtonCommon({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default ButtonCommon;
