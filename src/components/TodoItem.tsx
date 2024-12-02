import { useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface todos {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<{
  index: number;
  todo: todos;
  todos: Array<todos>;
  setTodos: React.Dispatch<React.SetStateAction<Array<todos>>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className={`todos__single ${todo.completed ? "completed" : ""}`}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : (
        <span className="todos__single--text">{todo?.text}</span>
      )}

      <div>
        {edit ? (
          <button type="submit" className="icon">
            Save
          </button>
        ) : (
          <>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.completed) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </>
        )}
      </div>
    </form>
  );
};

export default TodoItem;
