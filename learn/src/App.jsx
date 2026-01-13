import "./App.css";
import Todo from "./components/Todo.jsx"
import TodoTitle from "./components/TodoTitle.jsx"

function App() {
  return (
    <> 
      <TodoTitle />
      <Todo task="Learn React" description="Code along and take notes"/>
      <Todo task="Finish ASAP Frontend" description="3hrs everyday" />
      <Todo  task="Land a Junior Job" description="Apply job 2hrs everyday" />
      <Todo  task="Earn $100k+ " description="Live a life and relax!" />
    </>
  );
}

export default App;
