import "./App.css";
import Todo from "./components/Todo.jsx"
import TodoTitle from "./components/TodoTitle.jsx"

function App() {
  return (
    <> 
      <TodoTitle />
      <Todo task="Learn React"/>
      <Todo task="Finish ASAP Frontend"/>
      <Todo  task="Land a Junior Job" />
      <Todo  task="Earn $100k+ " />
    </>
  );
}

export default App;
