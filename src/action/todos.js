import { uuid } from "uuidv4";

export const addTodo = (title, priority) => {
  return {
    type: "ADD_TODO",
    payload: { title, isDone: false, id: uuid(), priority },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: { id },
  };
};

export const iscompleted = (id) => {
  return {
    type: "ISCOMPLETED",
    payload: { id },
  };
};
