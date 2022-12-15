/* eslint-disable no-undef */
import axios from 'axios';

import { TODO_ACTION_TYPE } from 'src/constants/reducer';

import {
  ApiProps,
  PostProps,
  PutProps,
  SignDataType,
  TodoPostDataType,
  TodoPutDataType,
  ReturnType,
  SignProps,
  CreateTodoProps,
  UpdateTodoProps,
  SignResponseType,
  TodoResponseType,
  DeleteTodoProps,
  TodoAsyncActionType,
} from 'src/types';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const getAuth = () => window.localStorage.getItem('access_token') as string;

const api = {
  post: async <R, D>(props: PostProps<D>): Promise<ReturnType<R>> => {
    const { path, headers, data } = props;
    const response = await axios.post(
      `${SERVER_URL}${path}`,
      { ...data },
      { headers: { ...headers } }
    );
    return response;
  },
  get: async <R>(props: ApiProps): Promise<ReturnType<R>> => {
    const { path, headers } = props;
    const response = await axios.get(`${SERVER_URL}${path}`, {
      headers: { ...headers },
    });
    return response;
  },
  put: async <R, D>(props: PutProps<D>): Promise<ReturnType<R>> => {
    const { path, headers, data } = props;
    const response = await axios.put(
      `${SERVER_URL}${path}`,
      { ...data },
      {
        headers: { ...headers },
      }
    );
    return response;
  },
  delete: async (props: ApiProps) => {
    const { path, headers } = props;
    await axios.delete(`${SERVER_URL}${path}`, {
      headers: { ...headers },
    });
  },
};

const Fetcher = {
  signIn: async ({ data }: SignProps): Promise<SignResponseType> => {
    const response = await api.post<SignResponseType, SignDataType>({
      path: '/auth/signin',
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    return response.data;
  },
  signUp: async ({ data }: SignProps) => {
    await api.post<SignResponseType, SignDataType>({
      path: '/auth/signup',
      headers: { 'Content-Type': 'application/json' },
      data,
    });
  },
  createTodo: async ({
    todo,
  }: CreateTodoProps): Promise<TodoAsyncActionType<TodoResponseType>> => {
    const { data } = await api.post<TodoResponseType, TodoPostDataType>({
      path: '/todos',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuth()}`,
      },
      data: { todo },
    });
    return { type: TODO_ACTION_TYPE.CREATE, payload: { data } };
  },
  getTodos: async (): Promise<TodoAsyncActionType<TodoResponseType[]>> => {
    const { data } = await api.get<TodoResponseType[]>({
      path: '/todos',
      headers: { Authorization: `Bearer ${getAuth()}` },
    });
    return { type: TODO_ACTION_TYPE.GET, payload: { data } };
  },
  updateTodos: async ({
    id,
    todo,
    isCompleted,
  }: UpdateTodoProps): Promise<TodoAsyncActionType<TodoResponseType>> => {
    const { data } = await api.put<TodoResponseType, TodoPutDataType>({
      path: `/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuth()}`,
      },
      data: { todo, isCompleted },
    });

    return { type: TODO_ACTION_TYPE.UPDATE, payload: { data } };
  },
  delete: async ({
    id,
  }: DeleteTodoProps): Promise<TodoAsyncActionType<number>> => {
    await api.delete({
      path: `/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuth()}`,
      },
    });
    return { type: TODO_ACTION_TYPE.DELETE, payload: { data: id } };
  },
};

export { Fetcher };
