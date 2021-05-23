import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../action/todos"

const TodoInputForm = () => {
  let title = "";
  const dispatch = useDispatch()
  const titleInputHandler = (e) => {
    e.preventDefault()
    title = e.target.value;
    console.log(title);
  }
  return (
    <StyledTodoForm>
      <h1>Add ToDos</h1>
      <form>
        <input type="text" id="title" onChange={titleInputHandler} />
        <button onClick={(e) => { e.preventDefault(); dispatch(addTodo(title)); }}>Add</button>
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
    padding: 1rem 3rem ;
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 120px;
    justify-content: space-evenly;
    button{
      background-color: #7ffa7f;
     padding: 1rem 4rem ;  
    }
    input{
      height: 7rem;
      font-size: 2rem;
      padding: 1rem;
    }
  }

`;
export default TodoInputForm;
