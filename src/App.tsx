import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/_main.scss";
import React, { useState } from "react";

interface todos {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<todos>>([]);

  const addTodo = (todoText: string) => {
    setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
    // console.log(todos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-container">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
