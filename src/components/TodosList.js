import { useSelector } from "react-redux";

const TodoList = () => {
    const counter = useSelector((state) => state.todos);
    return <div >
        {counter.map(todo => {
            return <div style={{ background: "wheat", marginTop: "3px", padding: "1rem" }}>{todo.title}</div>
        })}
    </div>
};

export default TodoList;
