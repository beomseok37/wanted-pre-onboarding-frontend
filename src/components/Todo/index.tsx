import React, { useMemo } from 'react';

import Line from 'src/components/Line';

import { todoKeyOrder } from 'src/constants/order';

import { CellType, TodoResponseType } from 'src/types';

interface Props {
  todo: TodoResponseType;
  onClickTodo: () => void;
}

function Todo({ todo, onClickTodo }: Props) {
  const cellList = useMemo(
    () =>
      todoKeyOrder.map(
        (key): CellType => ({
          value: todo[key],
          size: key === 'todo' ? 'big' : 'small',
        })
      ),
    [todo]
  );

  return <Line cellList={cellList} onClickLine={onClickTodo} />;
}

export default Todo;
