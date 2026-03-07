import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
