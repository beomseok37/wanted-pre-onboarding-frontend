import React, { ReactNode } from 'react';

import { Button } from './style';

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}

function CommonButton({ children, onClick, disabled }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

CommonButton.defaultProps = {
  disabled: false,
};

export default CommonButton;
