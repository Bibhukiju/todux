import "./App.css";
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <TodoInputForm/>
      <TodoList/>
    </div>
  );
}

export default App;