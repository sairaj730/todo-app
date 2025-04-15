import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getData, setData } from "./LocalStorageFolder";

export const Todo = () => {
  const [dateTime, setDateTime] = useState("");
  const [tasks, setTasks] = useState(() => getData());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const localDateTime = now.toLocaleString();
      setDateTime(localDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData(tasks);
  }, [tasks]);
  
  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim()) return;
    if (tasks.some((item) => item.text === inputValue)) return;
    setTasks((prev) => [...prev, { text: inputValue, isStuck: false }]);
  };

  const handleDeleteTodo = (text) => {
    setTasks((prev) => prev.filter((task) => task.text !== text));
  };

  const handleCheckBtn = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, isStuck: !task.isStuck } : task
      )
    );
  };

  const handleClearAll = () => setTasks([]);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <div className="date-time">{dateTime}</div>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul className="todo-list">
          {tasks.map((curTask, idx) => (
            <TodoList
              key={`${curTask.text}-${idx}`}
              idx={idx}
              curTask={curTask}
              handleCheckBtn={handleCheckBtn}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </section>

      {tasks.length > 0 && (
        <section>
          <button className="clear-btn" onClick={handleClearAll}>
            Clear all
          </button>
        </section>
      )}
    </section>
  );
};
