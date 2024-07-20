import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";

const TaskForm = () => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
            const fitlerTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags: fitlerTags}
            })
        } else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    };
    console.log(taskData.tags);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setTaskData((prev) => {
            // console.log(prev, "prev state");
            return {...prev, [name]: value}
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData);
    }
    // const [task, setTask] = useState("");

    // const [status, setStatus] = useState("todo")

    // const handleSetTask = (e) => {
    //     console.log(e.target.value, "e.target");
    //     setTask(e.target.value)
    // }

    // const handleSetStatus = (e) => {
    //     setStatus(e.target.value)
    // }

    return(
        <header className="header">
            <form onSubmit={handleSubmit}>
                <input type="text" className="task-input"
                name="task"
                placeholder="Enter Task"
                onChange={handleChange} />

                <div className="form-bottom">
                    <div>
                        <Tag tagName="HTML" selectTag={selectTag}/>
                        <Tag tagName="CSS" selectTag={selectTag}/>
                        <Tag tagName="JavaScript" selectTag={selectTag}/>
                        <Tag tagName="React" selectTag={selectTag}/>
                    </div>


                    <div>
                    <select className="task-status" onChange={handleChange} name="status">
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