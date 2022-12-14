import React, { ReactNode } from 'react';

import { Row, Column } from 'src/components/grids';

interface Props {
  type: 'check';
  element: ReactNode;
}

function LabelInput({ type, element }: Props) {
  return (
    <Column height={100}>
      <Row
        width={350}
        alignItems='center'
        justifyContent='space-between'
        padding={10}
      >
        <p>{type}</p>

        {element}
      </Row>
    </Column>
  );
}

export default LabelInput;
