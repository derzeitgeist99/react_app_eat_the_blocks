import React from "react";

export default ({ task, markTaskDone, deleteTask }) => {
    return (
    <>
      {task.done ? (
        <span style={{textDecoration: 'line-through'}}>
          {task.description}
        </span>
      ) : task.description}
      <br />
      <div className="btn-group" role="group" aria-label="Basic example">
          {task.done ? (null) : (
        <button type="button"
                className="btn btn-secondary"
                onClick = {() => markTaskDone(task.id)}>
                Mark as Done</button>)}
        <button type="button"
                className="btn btn-secondary"
                onClick = {() =>deleteTask(task.id)}
                >DeleteTask</button>

    </div>
    </>
        
    )

} 