interface SignDataType {
  email: string;
  password: string;
}

interface TodoPostDataType {
  todo: string;
}

interface TodoPutDataType {
  todo: string;
  isCompleted: boolean;
}

export type { SignDataType, TodoPostDataType, TodoPutDataType };
