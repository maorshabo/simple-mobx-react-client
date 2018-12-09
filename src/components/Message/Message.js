import React from 'react';

const Message = ({ color, message }) => (
  <div className="mb-4" style={{ color }}>
    <small>{message}</small>
  </div>
);

export default Message;