import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setinputValue] = useState("");
    const handleInputChange = (val) => {
        setinputValue(val);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setinputValue("");
    }
    return (
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
    );
}