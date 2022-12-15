/* eslint-disable no-undef */
import React, { useEffect, useReducer, useState } from 'react';

import { Column, Row } from 'src/components/grids';
import LabelInput from 'src/components/LabelInput';
import LabelElement from 'src/components/LabelElement';
import { Button, IconButton } from 'src/components/Button';
import TodoList from 'src/components/TodoList';

import { TODO_ACTION_TYPE } from 'src/constants/reducer';

import { todoReducer } from 'src/reducer/todo';

import { Fetcher } from 'src/utils/Fetcher';

import { TodoResponseType } from 'src/types';

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
  const [todoState, todoDispatch] = useReducer(todoReducer, { todoList: [] });
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
    const access_token = window.localStorage.getItem('access_token') as string;
    const path = '/todos';
    const data = await Fetcher.getTodos({ access_token, path });
    todoDispatch({ type: TODO_ACTION_TYPE.GET, payload: { data } });
  };

  const createTodo = async () => {
    const access_token = window.localStorage.getItem('access_token') as string;
    const path = '/todos';
    const data = await Fetcher.createTodo({ path, access_token, todo: todo });
    todoDispatch({ type: TODO_ACTION_TYPE.CREATE, payload: { data } });
  };

  const updateTodo = async () => {
    const access_token = window.localStorage.getItem('access_token') as string;
    const { id } = selectedTodo;
    const path = `/todos/${id}`;
    const data = await Fetcher.updateTodos({
      path,
      access_token,
      todo,
      isCompleted,
    });
    todoDispatch({ type: TODO_ACTION_TYPE.UPDATE, payload: { data } });
  };

  const deleteTodo = async () => {
    const access_token = window.localStorage.getItem('access_token') as string;
    const { id } = selectedTodo;
    const path = `/todos/${id}`;
    await Fetcher.delete({ path, access_token });
    todoDispatch({ type: TODO_ACTION_TYPE.DELETE, payload: { data: id } });
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

  const todoInputInitialization = () => {
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
    todoInputInitialization();
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

        <TodoList todoList={todoState.todoList} onClickTodo={handleClickTodo} />
      </Column>
    </Wrapper>
  );
}

export default TodoPage;
