/* eslint-disable no-undef */
import axios from 'axios';

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
  createTodo: async ({ todo }: CreateTodoProps): Promise<TodoResponseType> => {
    const response = await api.post<TodoResponseType, TodoPostDataType>({
      path: '/todos',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuth()}`,
      },
      data: { todo },
    });
    return response.data;
  },
  getTodos: async (): Promise<TodoResponseType[]> => {
    const response = await api.get<TodoResponseType[]>({
      path: '/todos',
      headers: { Authorization: `Bearer ${getAuth()}` },
    });
    return response.data;
  },
  updateTodos: async ({
    id,
    todo,
    isCompleted,
  }: UpdateTodoProps): Promise<TodoResponseType> => {
    const response = await api.put<TodoResponseType, TodoPutDataType>({
      path: `/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuth()}`,
      },
      data: { todo, isCompleted },
    });

    return response.data;
  },
  delete: async ({ id }: DeleteTodoProps) => {
    await api.delete({
      path: `/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuth()}`,
      },
    });
  },
};

export { Fetcher };
