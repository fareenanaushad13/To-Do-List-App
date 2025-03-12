import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./Todo.css";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task);
        if (task.trim() === "") return;
        dispatch(addTodo(task));
        setTask("");
    };
    return(
    <>
      <form onSubmit={submitHandler}>
        <input type = "text"  value={task} onChange={(e) => setTask(e.target.value)}>
        </input>
        <button>Add Tasks</button>
    </form>
    </>)
}