import React from 'react';

import { Row } from 'src/components/grids';

import { CellType } from 'src/types';

import { Cell } from './style';

interface Props {
  cellList: CellType[];
  width?: number;
  onClickLine?: () => void;
}

function Line({ cellList, width, onClickLine }: Props) {
  const cellLength = cellList.length;

  return (
    <Row width={width} fullWidth={!width} onClick={onClickLine} padding={10}>
      {cellList.map((cell, index) => (
        <Cell
          key={JSON.stringify(cell) + index.toString()}
          size={cell.size}
          borderRightNone={index === cellLength - 1}
        >
          {typeof cell.value === 'boolean'
            ? cell.value
              ? '✅'
              : '🟩'
            : cell.value}
        </Cell>
      ))}
    </Row>
  );
}

Line.defaultProps = {
  width: 0,
  onClickRow: () => {},
  isAttribute: false,
};

export default Line;
