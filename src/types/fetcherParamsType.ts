interface SignProps {
  path: string;
  data: {
    email: string;
    password: string;
  };
}

interface TodoProps {
  path: string;
  token: string;
}

interface CreateTodoProps extends TodoProps {
  todo: string;
}

interface UpdateTodoProps extends TodoProps {
  todo: string;
  isCompleted: boolean;
  id: number;
}

interface DeleteTodoProps extends TodoProps {
  id: number;
}

export type {
  SignProps,
  TodoProps,
  CreateTodoProps,
  UpdateTodoProps,
  DeleteTodoProps,
};
