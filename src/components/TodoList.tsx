import React, { FC } from "react";
import TodoItem from "./TodoItem";

interface todos {
  id: number;
  text: string;
  completed: boolean;
}

interface props {
  todos: Array<todos>;
  setTodos: React.Dispatch<React.SetStateAction<Array<todos>>>;
}

const TodoList: FC<props> = ({ todos, setTodos }) => {
  return (
    <>
      <h2>All Tasks</h2>
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem
              index={index}
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
            />
          ))
        ) : (
          <h4>No Task Added</h4>
        )}
      </div>
    </>
  );
};

export default TodoList;
