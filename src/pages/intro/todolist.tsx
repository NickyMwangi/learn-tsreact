import { useState } from "react";
import { useParams } from "react-router-dom";

export function ToDoList() {
  const { id } = useParams();

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "start coding"]);
  const [newTask, setNewTask] = useState("");

  const InputChange = (e: any) => {
    setNewTask(e.target.value);
  };
  
  const AddNewTask = (e: any) => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const DeleteTask = (i: any) => {
    const updatedTask = tasks.filter((el, n) => n !== i);
    setTasks(updatedTask);
  };
  const MoveTaskDown = (i: any) => {
    if (i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]];
      setTasks(updatedTasks);
    }
  };
  const MoveTaskUp = (i: any) => {
    if (i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [updatedTasks[i - 1], updatedTasks[i]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To do list {id}</h1>
      <div>
        <input type="text" placeholder="Enter a task" value={newTask} onChange={InputChange} />
        <button className="add-button" onClick={AddNewTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => DeleteTask(i)}>
              Delete
            </button>
            <button className="up-btn" onClick={() => MoveTaskUp(i)}>
              Up
            </button>
            <button className="down-btn" onClick={() => MoveTaskDown(i)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
