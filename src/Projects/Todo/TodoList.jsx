import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export const TodoList = ({idx, curTask, handleCheckBtn, handleDeleteTodo}) => {
    return (
        <li key={idx} className="todo-item">
            <span style={{textDecoration : curTask.isStuck?'line-through':'none'}}>{curTask.text}</span>
            <button className="check-btn" 
            onClick={() => handleCheckBtn(idx)} >
            <FaCheck/></button>
            <button className="delete-btn" 
            onClick={() => {handleDeleteTodo(curTask.text)}}>
            <MdDelete />
            </button>
        </li>
    );
}