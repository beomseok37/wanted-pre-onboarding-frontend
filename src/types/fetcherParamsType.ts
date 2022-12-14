interface SignProps {
  path: string;
  data: {
    email: string;
    password: string;
  };
}

interface TodoProps {
  path: string;
  access_token: string;
}

interface CreateTodoProps extends TodoProps {
  todo: string;
}

interface UpdateTodoProps extends TodoProps {
  todo: string;
  isCompleted: boolean;
}

export type { SignProps, TodoProps, CreateTodoProps, UpdateTodoProps };
