import { FaCalendarCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);

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

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
        {/* <div className="date-time">
          {new Date().toLocaleString()}
        </div> */}
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
              <button className="check-btn">
                <FaCalendarCheck />
              </button>
              <button className="delete-btn">
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
