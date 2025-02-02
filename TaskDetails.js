import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const TaskDetails=({tasks, onUpdateStatus})=>{
    const {id}= useParams();
    const navigate=useNavigate();
    const task=tasks.find((t)=>t.id === Number(id));

    if (!task){
        return (
            <div className="task-not-found">
                <h1>Task not found</h1>
                <button onClick={()=>navigate('/tasks')} className="return-button">Return to Tasks</button>
            </div> 
        );
    }
    return (
        <div className="task-details-container">
            <h1>{task.title}</h1>
            <p className="task-description">{task.description}</p>

            <div className="task-info">
            <p><strong>Status:</strong> <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span></p>
            <p><strong>Priority:</strong> <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></p>
            <p><strong>Deadline:</strong> {task.deadline}</p>
            <p><strong>Assignee:</strong> {task.assignee}</p>
            </div>

            <div className="task-buttons">
            <button onClick={() => onUpdateStatus(task.id, 'In Progress')} className="in-progress-button" disabled={task.status === 'In Progress'}>
            Mark In Progress
            </button>
             <button onClick={() => onUpdateStatus(task.id, 'Completed')} className="completed-button" disabled={task.status === 'Completed'}>
             Mark Completed
             </button>
            <button onClick={() => navigate('/tasks')} className="back-button">Back to Tasks</button>
            </div>
        </div>
    );
};

export default TaskDetails;