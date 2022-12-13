import React, { ReactNode } from 'react';

import { Wrapper } from './style';

interface Props {
  children?: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: number;
  height?: number;
  padding?: number;
  fullHeight?: boolean;
  fullWidth?: boolean;
}

function Column({
  children,
  justifyContent,
  alignItems,
  width,
  height,
  padding,
  fullHeight,
  fullWidth,
}: Props) {
  return (
    <Wrapper
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      width={width!}
      height={height!}
      padding={padding!}
      fullHeight={fullHeight!}
      fullWidth={fullWidth!}
    >
      {children}
    </Wrapper>
  );
}

Column.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 0,
  height: 0,
  padding: 0,
  fullHeight: false,
  fullWidth: false,
};

export default Column;
