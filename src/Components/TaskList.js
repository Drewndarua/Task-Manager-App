import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskList = ({ tasks, onDeleteTask, onUpdateStatus }) => {
  const navigate = useNavigate();

  const toDoTasks = tasks.filter((task) => task.status === "To do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  const renderTasks = (title, taskArray, statusClass) => (
    <div className={`task-container ${statusClass}`}>
      <h3>{title}</h3>
      {taskArray.length === 0 ? (
        <p>No tasks in this category.</p>
      ) : (
        taskArray.map((task) => (
          <div key={task.id} className="task-item">
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            <p>{task.status}</p>

            <button
              className="edit-task"
              onClick={() => navigate(`/edit/${task.id}`)}>
              ✏ Edit
            </button>

            {task.status !== "In Progress" && (
              <button
                className="in-progress-task"
                onClick={() => onUpdateStatus(task.id, "In Progress")}>
                ⏳ In Progress
              </button>
            )}

            {task.status !== "Completed" && (
              <button
                className="complete-task"
                onClick={() => onUpdateStatus(task.id, "Completed")}>
                ✅ Completed
              </button>
            )}

            <button
              className="delete-task"
              onClick={() => onDeleteTask(task.id)}>
              ❌ Delete
            </button>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {renderTasks("To Do", toDoTasks, "to-do")}
      {renderTasks("In Progress", inProgressTasks, "in-progress")}
      {renderTasks("Completed", completedTasks, "completed")}
    </div>
  );
};

export default TaskList;
