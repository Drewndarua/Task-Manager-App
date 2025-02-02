import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Binary Brains. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
