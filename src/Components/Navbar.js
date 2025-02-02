import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  if (!isAuthenticated) return null;
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/add">Add Task</Link>
      <Link to="/login">Logout</Link>
    </nav>
  );
};

export default Navbar;