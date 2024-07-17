import './App.css'
import TaskForm from './components/TaskForm'
import Body from './components/Body'
import doneIcon from "./assets/check-mark-button-free-.png"
import doingIcon from "./assets/Emoji_u1f31f.svg.png"
import todoIcon from "./assets/kisspng-shooting-target-darts-computer-icons-target-5ab7e8ce4eb491.9076584915220021263224.png"

function App() {

  return (
    <div className="app">
      <TaskForm />
      <main className="body">
      <Body title="To do" icon={todoIcon}/>
      <Body title="Doing" icon={doingIcon}/>
      <Body title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App;
