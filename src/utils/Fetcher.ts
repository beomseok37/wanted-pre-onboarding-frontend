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
  TodoProps,
  CreateTodoProps,
  UpdateTodoProps,
  SignResponseType,
  TodoResponseType,
} from 'src/types';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

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
  signIn: async ({ path, data }: SignProps): Promise<SignResponseType> => {
    const { email, password } = data;
    const response = await api.post<SignResponseType, SignDataType>({
      path,
      headers: { 'Content-Type': 'application/json' },
      data: { email, password },
    });
    return response.data;
  },
  signUp: async ({ path, data }: SignProps) => {
    const { email, password } = data;
    await api.post<SignResponseType, SignDataType>({
      path,
      headers: { 'Content-Type': 'application/json' },
      data: { email, password },
    });
  },
  createTodo: async ({
    path,
    access_token,
    todo,
  }: CreateTodoProps): Promise<TodoResponseType> => {
    const response = await api.post<TodoResponseType, TodoPostDataType>({
      path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      data: { todo },
    });
    return response.data;
  },
  getTodos: async ({
    path,
    access_token,
  }: TodoProps): Promise<TodoResponseType[]> => {
    const response = await api.get<TodoResponseType[]>({
      path,
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return response.data;
  },
  updateTodos: async ({
    path,
    access_token,
    todo,
    isCompleted,
  }: UpdateTodoProps): Promise<TodoResponseType> => {
    const response = await api.put<TodoResponseType, TodoPutDataType>({
      path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      data: { todo, isCompleted },
    });

    return response.data;
  },
  delete: async ({ path, access_token }: TodoProps) => {
    await api.delete({
      path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
};

export { Fetcher };
