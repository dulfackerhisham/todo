import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";

const TaskForm = () => {
    const [task, setTask] = useState("");

    const [status, setStatus] = useState("todo")

    const handleSetTask = (e) => {
        setTask(e.target.value)
    }

    const handleSetStatus = (e) => {
        setStatus(e.target.value)
    }

    console.log(task);
    console.log(status);

    return(
        <header className="header">
            <form>
                <input type="text" className="task-input"
                placeholder="Enter Task"
                onChange={handleSetTask} />

                <div className="form-bottom">
                    <div>
                        <Tag tagName="HTML"/>
                        <Tag tagName="CSS"/>
                        <Tag tagName="JavaScript"/>
                        <Tag tagName="React"/>
                    </div>


                    <div>
                    <select className="task-status" onChange={handleSetStatus}>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>

                    <button type="submit" 
                    className="task-submit">
                        + Add Task
                    </button>
                    </div>
                </div>

            </form>
         </header>

    )
};

export default TaskForm;