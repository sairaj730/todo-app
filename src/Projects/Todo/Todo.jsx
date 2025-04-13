import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime,setDateTime]=useState("");

  const handleInputChange = (val) => {
    setinputValue(val);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setinputValue("");
      return;
    }

    setTask((value) => [...value, inputValue]);
    setinputValue("");
  };
  setInterval(() => {
    const now=new Date();
    const LocatDateAndTime=now.toLocaleString();
    setDateTime(`${LocatDateAndTime}`)},1000);
    
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => (curTask !== value));
    setTask(updatedTask);
  };
  const handleClaerAll = () => {
    setTask([]);
  };
    return ( <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <div className="date-time">
          {dateTime}
        </div>
      </header>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter your task"
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add task
            </button>
          </div>
        </form>
      </section>

      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curTask, idx) => (
            <li key={idx} className="todo-item">
              <span>{curTask}</span>
              <button className="check-btn"><FaCheck/>
              </button>
              <button className="delete-btn" onClick={() => {handleDeleteTodo(curTask)}}>
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClaerAll}>Clear all</button>
      </section>
    </section>
);
};
