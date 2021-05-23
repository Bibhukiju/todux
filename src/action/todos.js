import { uuid } from "uuidv4";

export const addTodo = (title) => {
  return {
    type: "ADD_TODO",
    payload: { title, isDone: false, id: uuid() },
  };
};

export const deleteTodo = () => {
  return {
    type: "DELETE_TODO",
  };
};
