import React, { ReactNode } from 'react';

import { Wrapper } from './style';

interface Props {
  children?: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: number;
  height?: number;
  padding?: number;
}

function Row({
  children,
  justifyContent,
  alignItems,
  width,
  height,
  padding,
}: Props) {
  return (
    <Wrapper
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      width={width!}
      height={height!}
      padding={padding!}
    >
      {children}
    </Wrapper>
  );
}

Row.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 0,
  height: 0,
  padding: 0,
};

export default Row;
