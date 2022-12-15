import React, { ReactNode } from 'react';

import CommonButton from '../CommonButton';

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

function IconButton({ children, onClick, disabled }: Props) {
  return (
    <CommonButton onClick={onClick} disabled={disabled} noBorder>
      {children}
    </CommonButton>
  );
}

IconButton.defaultProps = {
  disabled: false,
};

export default IconButton;
