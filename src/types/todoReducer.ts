// GET
// {token} , {path
//CREATE
// {token,id, todo, isCompleted, userId}, {path}
//EDIT
// {token,id, todo, isCompleted, userId}, {path}
//DELETE
// {token,id}, {path}
import { TODO_ACTION_TYPE } from 'src/constants/reducer';

import { TodoResponseType } from './fetcherResponseType';

interface TodoPayloadType<T> {
  data: T;
}

interface TodoStateType {
  todoList: TodoResponseType[];
}

type TodoActionType =
  | { type: TODO_ACTION_TYPE.GET; payload: TodoPayloadType<TodoResponseType[]> }
  | {
      type: TODO_ACTION_TYPE.CREATE;
      payload: TodoPayloadType<TodoResponseType>;
    }
  | {
      type: TODO_ACTION_TYPE.UPDATE;
      payload: TodoPayloadType<TodoResponseType>;
    }
  | { type: TODO_ACTION_TYPE.DELETE; payload: TodoPayloadType<number> };

export type { TodoActionType, TodoStateType };
