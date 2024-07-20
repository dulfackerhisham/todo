import "./Body.css"
import TaskCard from "./TaskCard";
const Body = ({title, icon, tasks, status}) => {


  return (
    <>
        <section className="task-column">

          <h2 className="task-col-heading" >
            <img className="task-col-icon" src={icon} alt="" />
            {title}
            </h2>

            

            {tasks.map((task, index) => 
            task.status === status && <TaskCard 
            key={index} 
            title={task.task} 
            tags={task.tags}/>)}
            
        </section>

    </>

  )
};

export default Body;