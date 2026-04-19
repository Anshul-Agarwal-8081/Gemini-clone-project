import React from 'react';
import useChatStore from '../../store/useChatStore';
import './ChatArea.css';

const ChatArea = () => {
  const { messages, isLoading } = useChatStore();

  return (
    <div className="chat-container">
      {messages.length === 0 ? (
        <div className="welcome-screen">
          <h1 className="welcome-title">
            Hello, user
          </h1>
          <p className="welcome-subtitle">How can I help you today?</p>
        </div>
      ) : (
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className="message-item">
              <div 
                className="avatar" 
                style={{ backgroundColor: msg.role === 'user' ? '#3b82f6' : '#22c55e' }} 
              />
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
          {isLoading && <div className="thinking-indicator">Gemini is thinking...</div>}
        </div>
      )}
    </div>
  );
};

export default ChatArea;
