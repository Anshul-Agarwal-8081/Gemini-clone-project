import React, { useState } from 'react';
import useChatStore from '../../store/useChatStore';
import './PromptInput.css';

const PromptInput = () => {
  const [input, setInput] = useState('');
  const { addMessage, setLoading } = useChatStore();

  const handleSend = () => {
    if (!input.trim()) return;
    
    addMessage({ role: 'user', content: input });
    setInput('');
    
    // Simulate AI response
    setLoading(true);
    setTimeout(() => {
      addMessage({ role: 'model', content: 'This is a simulated response.' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Enter a prompt here"
          className="prompt-field"
        />
        <div className="input-actions">
          <button className="action-btn">📷</button>
          <button className="action-btn">🎤</button>
          <button 
            onClick={handleSend}
            className="send-btn"
          >
            ➤
          </button>
        </div>
      </div>
      <p className="input-disclaimer">
        Gemini may display inaccurate info, including about people, so double-check its responses. 
        <a href="#" className="disclaimer-link">Your privacy & Gemini Apps</a>
      </p>
    </div>
  );
};

export default PromptInput;
