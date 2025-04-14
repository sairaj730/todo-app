import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [dateTime,setDateTime]=useState("");
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (val) => {
    setinputValue(val);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.some((item) => item.text === inputValue)) {
      setinputValue("");
      return;
    }
    setTask((value) => [...value, { text: inputValue, isStuck: false }]);
    setinputValue("");
  };

  setInterval(() => {
    const now=new Date();
    const LocatDateAndTime=now.toLocaleString();
    setDateTime(`${LocatDateAndTime}`)},1000);
  
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => (curTask.text !== value));
    setTask(updatedTask);
  };
  const handleCheckBtn = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index].isStuck = !updatedTasks[index].isStuck;
    setTask(updatedTasks);
  };  
  const handleClearAll = () => {
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
              <span style={{textDecoration : curTask.isStuck?'line-through':'none'}}>{curTask.text}</span>
              <button className="check-btn" onClick={() => handleCheckBtn(idx)} >
                <FaCheck/></button>
              <button className="delete-btn" onClick={() => {handleDeleteTodo(curTask.text)}}>
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </section>
      {task.length>0 && (
        <section>
        <button className="clear-btn" onClick={handleClearAll}>Clear all</button>
      </section>
      )}
    </section>
);
};
