import "./TaskCard.css"
import Tag from "./Tag"
import dltIcon from "../assets/dlt.png"

const TaskCard = () => {
    return(
        <article className="task-card">
            <p className="task-text">This is Sample Text.</p>

            <div className="task-card-bottom">
                <div className="task-card-tags">
                    <Tag tagName="HTML" />
                    <Tag tagName="CSS" />
                </div>
                <div className="task-dlt">
                    <img className="dlt-icon" src={dltIcon} alt="" />
                </div>
            </div>
        </article>
    )
};

export default TaskCard;