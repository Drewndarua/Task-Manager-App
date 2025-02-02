import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = ({ tasks, onAddTask, onUpdateTask }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingTask = tasks.find(task => task.id === Number(id));

  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
    status: 'To do',
    assignee: '',
  });

  useEffect(() => {
    if (existingTask) {
      setTask(existingTask);
    }
  }, [existingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.deadline) {
      alert('Title and deadline are required!');
      return;
    }

    if (existingTask) {
      onUpdateTask(task);
    } else {
      onAddTask({ ...task, id: Date.now() });
    }
    
    navigate('/tasks');
  };

  return (
    <div className="task-form-container">
      <h2>{existingTask ? "Edit Task" : "Add New Task"}</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description"></textarea>
        <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="To do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input type="text" name="assignee" value={task.assignee} onChange={handleChange} placeholder="Assign to (optional)" />

        <button type="submit" className="submit-task">{existingTask ? "Update Task" : "Create Task"}</button>
        <button type="button" className="cancel-task" onClick={() => navigate('/tasks')}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;