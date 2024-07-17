import "./Body.css"
import TaskCard from "./TaskCard";
const Body = ({title, icon}) => {


  return (
    <>
        <section className="task-column">

          <h2 className="task-col-heading" >
            <img className="task-col-icon" src={icon} alt="" />
            {title}
            </h2>

            <TaskCard />
            
        </section>

    </>

  )
};

export default Body;