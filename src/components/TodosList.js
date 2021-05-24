import styled from "styled-components";
import TodoListItems from "./TodoListItems";


const TodoList = () => {
    return <ListSection >
        <div className="lowList">
            <div className="title">
                <center>
                    <h2>Low Priority</h2>
                </center>
            </div>
            <TodoListItems priority={"low"} />
        </div>
        <div className="moderateList">
            <div className="title">
                <center>
                    <h2>Moderate Priority</h2>
                </center>
            </div>
            <TodoListItems priority={"moderate"} />
        </div>
        <div className="high">
            <div className="title">
                <center>
                    <h2>High Priority</h2>
                </center>
            </div>
            <TodoListItems priority={"high"} />
        </div>
    </ListSection>
};
const ListSection = styled.section`
    display:flex;
    flex-wrap: wrap;
   align-items: center;
   margin-top: 20px;
    .lowList,.moderateList,.high{
        flex: 1;
        border: 1px solid red;
        height: 55vh;
        min-width: 300px;
        align-items: center;
        justify-content: center;
        overflow: scroll;
        .title{
            position: sticky;
            width: 100%;
            top: 0%;
            padding-top: 2px;
            padding-bottom: 2px;
        }
       
    }
    .high{
        .title{
            background-color: #FF595E;
        }
    }
    .moderateList{
        .title{
            background-color: wheat;
        }
    }
    .lowList
    {
        .title{
            background-color: #79ec7d;
        }
    }
    `

    ;


export default TodoList;
