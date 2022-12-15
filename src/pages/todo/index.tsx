/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

import { Column, Row } from 'src/components/grids';
import LabelInput from 'src/components/LabelInput';
import LabelElement from 'src/components/LabelElement';
import { Button, IconButton } from 'src/components/Button';
import TodoList from 'src/components/TodoList';

import { todoReducer } from 'src/reducer/todo';
import useAsyncReducer from 'src/hooks/useAsyncReducer';

import { Fetcher } from 'src/utils/Fetcher';

import { TodoActionType, TodoResponseType, TodoStateType } from 'src/types';

import { Wrapper, Title, Check } from './style';

/**
 * todo만 있음 됨
 * edit할 때 check도 할 수 있게만 변경해주면 될 것 같음
 * 처음에 getTodos로 todo list를 받아옴 그걸 토대로 todo list 작성
 */

const initialSelectedTodo = {
  id: -1,
  todo: '',
  isCompleted: false,
  userId: 0,
};

function TodoPage() {
  const [asyncState, asyncDispatch] = useAsyncReducer<
    TodoStateType,
    TodoActionType
  >(todoReducer, { todoList: [] });
  const [todo, setTodo] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedTodo, setSelectedTodo] =
    useState<TodoResponseType>(initialSelectedTodo);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    if (isSelected !== (selectedTodo.id !== -1)) {
      setIsSelected(selectedTodo.id !== -1);
    }
  }, [todo, selectedTodo]);

  const getTodo = async () => {
    await asyncDispatch(Fetcher.getTodos());
  };

  const createTodo = async () => {
    await asyncDispatch(Fetcher.createTodo({ todo }));
  };

  const updateTodo = async () => {
    const { id } = selectedTodo;
    await asyncDispatch(
      Fetcher.updateTodos({
        id,
        todo,
        isCompleted,
      })
    );
  };

  const deleteTodo = async () => {
    const { id } = selectedTodo;
    await asyncDispatch(Fetcher.delete({ id }));
  };

  const setTodoInput = ({
    newTodo,
    newSelectedTodo,
    newIsCompleted,
  }: {
    newTodo: string;
    newSelectedTodo: TodoResponseType;
    newIsCompleted: boolean;
  }) => {
    setTodo(newTodo);
    setSelectedTodo(newSelectedTodo);
    setIsCompleted(newIsCompleted);
  };

  const initializeTodoInput = () => {
    setTodoInput({
      newTodo: '',
      newSelectedTodo: initialSelectedTodo,
      newIsCompleted: false,
    });
  };

  const handleClickTodoCUD = async (
    action: () => Promise<void> | void = () => {}
  ) => {
    if (action instanceof (async () => {}).constructor) {
      await action();
    }
    initializeTodoInput();
  };

  const handleClickTodo = (nowTodo: TodoResponseType) => {
    const { todo, isCompleted } = nowTodo;
    setTodoInput({
      newTodo: todo,
      newSelectedTodo: nowTodo,
      newIsCompleted: isCompleted,
    });
  };

  const handleClickCheck = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Wrapper>
      <Column alignItems='center' fullHeight>
        <Title>Todo List</Title>
        <LabelInput type='todo' inputBind={[todo, setTodo]} />
        <LabelElement
          type='isCompleted'
          element={
            <Row alignItems='center'>
              {isSelected || !!todo ? (
                <>
                  {isCompleted ? (
                    <IconButton onClick={handleClickCheck}>
                      <Check>✅</Check>
                    </IconButton>
                  ) : (
                    <IconButton onClick={handleClickCheck}>
                      <Check>🟩</Check>
                    </IconButton>
                  )}
                </>
              ) : null}
            </Row>
          }
        />
        <Row
          alignItems='center'
          width={300}
          justifyContent='space-evenly'
          padding={10}
        >
          {isSelected ? (
            <>
              <Button onClick={() => handleClickTodoCUD()}>취소</Button>
              <Button onClick={() => handleClickTodoCUD(updateTodo)}>
                편집
              </Button>
              <Button onClick={() => handleClickTodoCUD(deleteTodo)}>
                삭제
              </Button>
            </>
          ) : (
            <Button
              onClick={() => handleClickTodoCUD(createTodo)}
              disabled={!todo}
            >
              생성
            </Button>
          )}
        </Row>

        <TodoList
          todoList={asyncState.todoList}
          onClickTodo={handleClickTodo}
        />
      </Column>
    </Wrapper>
  );
}

export default TodoPage;
