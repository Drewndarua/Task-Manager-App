import React from "react";
const Header = ({ user, theme, toggleTheme }) => {
  return (
    <header className={`header ${theme}`}>
      <div className="logo">Task Manager</div>
      <div className="user-section">
        <div className="user-icon">👤</div>
        <div className="user-name">{user ? user.name : "Guest"}</div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
