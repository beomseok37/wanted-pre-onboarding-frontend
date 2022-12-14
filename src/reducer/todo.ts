import { TodoStateType, TodoActionType } from 'src/types';

function todoReducer(state: TodoStateType, action: TodoActionType) {
  switch (action.type) {
    case 'GET_TODO': {
      const { data: todoList } = action.payload;
      return {
        todoList,
      };
    }
    case 'CREATE_TODO': {
      const { data: todo } = action.payload;
      return {
        todoList: state.todoList.concat(todo),
      };
    }
    case 'UPDATE_TODO': {
      const { data: newTodo } = action.payload;
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === newTodo.id ? newTodo : todo
        ),
      };
    }
    case 'DELETE_TODO': {
      const { data: id } = action.payload;
      return {
        todoList: state.todoList.filter((todo) => todo.id !== id),
      };
    }
    default:
      return state;
  }
}

export { todoReducer };
