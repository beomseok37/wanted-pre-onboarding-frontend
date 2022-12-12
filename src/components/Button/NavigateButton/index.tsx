import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonCommon from '../CommonButton';

interface Props {
  href: string;
  children: ReactNode;
}

function NavigateButton({ href, children }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };
  return <ButtonCommon onClick={handleClick}>{children}</ButtonCommon>;
}

export default NavigateButton;
