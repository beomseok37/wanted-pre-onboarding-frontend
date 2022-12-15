interface SignResponseType {
  access_token: string;
}

interface TodoResponseType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoAsyncActionType<T> {
  type: string;
  payload: { data: T };
}

export type { SignResponseType, TodoResponseType, TodoAsyncActionType };
