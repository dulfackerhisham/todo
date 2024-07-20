import "./TaskCard.css"
import Tag from "./Tag"
import dltIcon from "../assets/dlt.png"

const TaskCard = ({title, tags}) => {
    return(
        <article className="task-card">
            <p className="task-text">{title}</p>

            <div className="task-card-bottom">
                <div className="task-card-tags">
                    {
                        tags.map((tag, index) => <Tag key={index} tagName={tag}/>)
                    }
                </div>
                <div className="task-dlt">
                    <img className="dlt-icon" src={dltIcon} alt="" />
                </div>
            </div>
        </article>
    )
};

export default TaskCard;