import React from "react";  
import { Link } from "react-router-dom";


 const Dashboard = ({ tasks }) => {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Link to="/add">Add Task</Link>
        <div>
          <p>To Do: {tasks.filter(t => t.status === "To do").length}</p>
          <p>In Progress: {tasks.filter(t => t.status === "In Progress").length}</p>
          <p>Completed: {tasks.filter(t => t.status === "Completed").length}</p>
        </div>
      </div>
    );
  };
  
  export default Dashboard;