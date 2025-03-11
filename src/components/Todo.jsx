import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";
import "./Todo.css"; 

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markDoneHandler = (id) => {
    dispatch(marksAsDone(id));
  };

  return (
    <div className="todo-container">
      <h2 className="title">To-Do List</h2>
      <AddForm />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.isDone ? "completed" : ""}`}>
            <span className="task">{todo.task}</span>
            <div className="actions">
              <button className="done-btn" onClick={() => markDoneHandler(todo.id)} disabled={todo.isDone}>
                Done
              </button>
              <button className="delete-btn" onClick={() => deleteHandler(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
