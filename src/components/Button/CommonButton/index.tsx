import React, { ReactNode } from 'react';

import { Button } from './style';

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  noBorder?: boolean;
}

function CommonButton({ children, onClick, disabled, noBorder }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled!} noBorder={noBorder!}>
      {children}
    </Button>
  );
}

CommonButton.defaultProps = {
  disabled: false,
  noBorder: false,
};

export default CommonButton;
