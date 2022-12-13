/* eslint-disable no-undef */
import axios from 'axios';

import {
  ApiProps,
  PostProps,
  PutProps,
  DeleteProps,
  SignDataType,
  TodoPostDataType,
  TodoPutDataType,
  TodoParamsType,
  ReturnType,
  SignProps,
  TodoProps,
  CreateTodoProps,
  UpdateTodoProps,
  DeleteTodoProps,
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
  put: async <R, D, P>(props: PutProps<D, P>): Promise<ReturnType<R>> => {
    const { path, headers, data, params } = props;
    const response = await axios.put(`${SERVER_URL}${path}`, {
      headers: { ...headers },
      data: { ...data },
      params: { ...params },
    });
    return response;
  },
  delete: async <P>(props: DeleteProps<P>) => {
    const { path, headers, params } = props;
    await axios.delete(`${SERVER_URL}${path}`, {
      headers: { ...headers },
      params: { ...params },
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
    token,
    todo,
  }: CreateTodoProps): Promise<TodoResponseType> => {
    const response = await api.post<TodoResponseType, TodoPostDataType>({
      path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: { todo },
    });
    return response.data;
  },
  getTodos: async ({ path, token }: TodoProps): Promise<TodoResponseType[]> => {
    const response = await api.get<TodoResponseType[]>({
      path,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
  updateTodos: async ({
    path,
    token,
    todo,
    isCompleted,
    id,
  }: UpdateTodoProps): Promise<TodoResponseType> => {
    const response = await api.put<
      TodoResponseType,
      TodoPutDataType,
      TodoParamsType
    >({
      path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: { todo, isCompleted },
      params: { id },
    });

    return response.data;
  },
  delete: async ({ path, token, id }: DeleteTodoProps) => {
    await api.delete<TodoParamsType>({
      path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params: { id },
    });
  },
};

export { Fetcher };
