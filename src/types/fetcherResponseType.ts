interface SignResponseType {
  access_token: string;
}

interface TodoResponseType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export type { SignResponseType, TodoResponseType };
