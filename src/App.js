import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TaskDetails from "./TaskDetails";
import TaskForm from "./TaskForm";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const login = (email, password) => {
    if (email === "abc@gmail.com" && password === "12345") {
      setIsAuthenticated(true);
      setUser({ name: "Jacob Murphy" });
      return true;
    }
    return false;
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <Header user={user} theme={theme} toggleTheme={toggleTheme} />
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Dashboard tasks={tasks} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tasks"
          element={
            isAuthenticated ? (
              <TaskList
                tasks={tasks}
                onDeleteTask={deleteTask}
                onUpdateStatus={updateTaskStatus}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tasks/:id"
          element={
            isAuthenticated ? (
              <TaskDetails tasks={tasks} onUpdateStatus={updateTaskStatus} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/add"
          element={
            isAuthenticated ? (
              <TaskForm tasks={tasks} onAddTask={addTask} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit/:id"
          element={
            isAuthenticated ? (
              <TaskForm tasks={tasks} onUpdateTask={updateTask} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={login} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;