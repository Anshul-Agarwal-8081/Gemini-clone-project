import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ChatArea from './components/chat/ChatArea';
import PromptInput from './components/common/PromptInput';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar - Component Isolation: Team Member 1 */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="main-content">
        <header className="app-header">
          <div className="model-info">
            Gemini <span className="model-badge">2.0 Flash</span>
          </div>
          <div 
            className="user-profile" 
            title="User Profile" 
          />
        </header>

        {/* Chat Thread - Component Isolation: Team Member 2 */}
        <ChatArea />

        {/* Input/Logic Logic - Component Isolation: Team Member 3 */}
        <div className="chat-input-wrapper">
          <PromptInput />
        </div>
      </main>
    </div>
  );
}

export default App;
