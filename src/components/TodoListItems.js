import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, iscompleted } from "../action/todos";

const TodoListItems = ({ priority }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((todo) => {
        return todo.priority === priority ? (
          <StyledItem key={todo.id}>
            <h4 className={todo.isDone ? "completed" : ""}>{todo.title}</h4>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(todo.id);
                  dispatch(iscompleted(todo.id));
                }}
              >
                {todo.isDone ? "Not done" : "Done"}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(todo.id);
                  dispatch(deleteTodo(todo.id));
                }}
              >
                Delete
              </button>
            </div>
          </StyledItem>
        ) : (
          ""
        );
      })}
    </>
  );
};
const StyledItem = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  align-items: center;
  padding: 5px;
  background-color: #f3f3f3;
  transition: all 1s ease-in;
  h4 {
    font-size: 1.5rem;
  }
  .completed {
    text-decoration: line-through;
    text-decoration-color: red;
  }
`;

export default TodoListItems;
