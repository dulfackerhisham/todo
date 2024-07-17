import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
    return(
        <header className="header">
            <form>
                <input type="text" className="task-input"
                placeholder="Enter Task" />

                <div className="form-bottom">
                    <div>
                        <Tag tagName="HTML"/>
                        <Tag tagName="CSS"/>
                        <Tag tagName="JavaScript"/>
                        <Tag tagName="React"/>
                    </div>


                    <div>
                    <select className="task-status">
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