import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../action/todos"

const TodoInputForm = () => {
  let title = "";
  let priority = "low";
  const dispatch = useDispatch()
  const titleInputHandler = (e) => {
    e.preventDefault()
    title = e.target.value;
    console.log(title);
  }
  const priorityChangeHandler = (e) => {
    e.preventDefault()
    priority = e.target.value;
    console.log(priority);
  }
  return (
    <StyledTodoForm>
      <h1>Add ToDos</h1>
      <form>
        <input type="text" id="title" onChange={titleInputHandler} required/>
        <select name="priority" onChange={priorityChangeHandler}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
        <button onClick={(e) => { e.preventDefault(); dispatch(addTodo(title, priority)); }}>Add</button>
      </form>
    </StyledTodoForm>
  );
};
const StyledTodoForm = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #f2f2f2;
  form{
    background-color: #f2f2f2;
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: space-evenly;
    button{
     background-color: #7ffa7f;
     padding: 1rem 2rem ; 
    margin-top: 1rem;

    }
    select{ 
      padding: 1rem 4rem ;
    font-size: 1.5rem;
    margin-top: 1rem;
    }
    input{
      font-size: 2rem;
      padding: 1rem;
    }
  }

`;
export default TodoInputForm;
