import React from 'react';
import Task from './Task.js';

export default({tasksData, markTaskDone, deleteTask}) => 
{return (
    <ul className="list-group">
        List of Tasks
            {tasksData.map( task => (
                <li key = {task.id} className="list-group-item">
                    <Task task = {task}
                        markTaskDone = {markTaskDone}
                        deleteTask = {deleteTask}> </Task>
                </li>
            ))
}

    
    </ul>
);

}