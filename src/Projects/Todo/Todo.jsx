
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const [dateTime,setDateTime]=useState("");
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.some((item) => item.text === inputValue)) return;
    setTask((value) => [...value, { text: inputValue, isStuck: false }]);
    
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

        <TodoForm onAddTodo={handleFormSubmit}/>

      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curTask, idx) => (
            <TodoList idx={idx} 
            curTask={curTask}
            handleCheckBtn={handleCheckBtn}
            handleDeleteTodo={handleDeleteTodo}/>))}
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
