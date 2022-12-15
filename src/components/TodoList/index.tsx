/* eslint-disable no-unused-vars */
import React from 'react';

import Line from 'src/components/Line';

import { todoKeyOrder } from 'src/constants/order';

import { TodoResponseType, CellType } from 'src/types';
import Todo from '../Todo';

import { Wrapper, TodoWrapper, AttributeWrapper } from './style';

interface Props {
  todoList: TodoResponseType[];
  onClickTodo: (nowTodo: TodoResponseType) => void;
}

const attributeList = todoKeyOrder.map(
  (key): CellType => ({
    value: key,
    size: key === 'todo' ? 'big' : 'small',
  })
);

function TodoList({ todoList, onClickTodo }: Props) {
  return (
    <Wrapper>
      <AttributeWrapper>
        <Line cellList={attributeList} />
      </AttributeWrapper>
      <TodoWrapper>
        {todoList.map((todo, index) => (
          <Todo
            key={JSON.stringify(todo) + index.toString()}
            todo={todo}
            onClickTodo={() => onClickTodo(todo)}
          />
        ))}
      </TodoWrapper>
    </Wrapper>
  );
}

export default TodoList;
