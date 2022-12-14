import { TodoResponseType } from 'src/types';

const todoKeyOrder: (keyof TodoResponseType)[] = [
  'id',
  'todo',
  'isCompleted',
  'userId',
];

export { todoKeyOrder };
