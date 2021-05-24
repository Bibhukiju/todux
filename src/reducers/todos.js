const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [action.payload, ...state];
    }
    case "DELETE_TODO": {
      const todos = [...state];
      console.log(action.payload);
      const finalTodo = todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      return finalTodo;
    }
    case "ISCOMPLETED": {
      const todos = [...state];
      console.log(action.payload);
      todos.forEach((todo) => {
        console.log(todo.id);
        if (todo.id === action.payload.id) {
          const isdone = todo.isDone;
          todo.isDone = !isdone;
        }
      });
      return todos;
    }
    default:
      return state;
  }
};
export default todosReducer;
