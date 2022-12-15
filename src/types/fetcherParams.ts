interface SignProps {
  path: string;
  data: {
    email: string;
    password: string;
  };
}

interface CreateTodoProps {
  todo: string;
}

interface UpdateTodoProps {
  todo: string;
  isCompleted: boolean;
  id: number;
}

interface DeleteTodoProps {
  id: number;
}

export type { SignProps, CreateTodoProps, UpdateTodoProps, DeleteTodoProps };
