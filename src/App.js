import React, {useState} from 'react'
import TaskList from "./TaskList.js"
import NewTask from "./NewTask.js" 



function App() {

  const [tasksData, setTaskData] = useState([]);
  const [nextTaskId,setNextTaskId] = useState(0);

  const createTask = description => {
    setTaskData(tasksData => ([...tasksData, {id: nextTaskId, description: description, done: false}]))
    console.log(tasksData)
    setNextTaskId(nextTaskId + 1)
  }

  const markTaskDone = id => {
    const newTaskData = tasksData.map(individualTask => {
      if(individualTask.id ===id) {individualTask.done = true}
      return individualTask
    } );
    setTaskData(newTaskData)

  }

  const deleteTask = id => {
    setTaskData(tasksData.filter(tasks => tasks.id !=id))
  }


  return (
    <div className="container">
      <div className="row">
        <div className ="col">
          <div className="jumbotron">
            <h1 className = "display-4">Todo List </h1>
          </div> 
          <NewTask createTask = {createTask}/>
          <br/>
          <TaskList
            tasksData = {tasksData}
            markTaskDone = {markTaskDone}
            deleteTask = {deleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
