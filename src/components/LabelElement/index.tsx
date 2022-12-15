import React, { ReactNode } from 'react';

import { Row, Column } from 'src/components/grids';

import { ElementWrapper } from './style';

interface Props {
  type: string;
  element: ReactNode;
  warning?: ReactNode;
}

function LabelElement({ type, element, warning }: Props) {
  return (
    <Column height={100}>
      <Row width={350} alignItems='center' justifyContent='space-between'>
        <p>{type}</p>
        <ElementWrapper>{element}</ElementWrapper>
      </Row>
      {warning}
    </Column>
  );
}

export default LabelElement;
