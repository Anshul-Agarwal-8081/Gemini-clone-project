import React from 'react';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content">
      <p>{content}</p>
    </div>
  );
};

export default MarkdownRenderer;
