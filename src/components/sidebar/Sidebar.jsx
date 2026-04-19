import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <button className="new-chat-btn">
        <span className="plus-icon">+</span> New Chat
      </button>
      <div className="sidebar-history">
        <p className="history-label">Recent</p>
        {/* History items will go here */}
      </div>
    </aside>
  );
};

export default Sidebar;
