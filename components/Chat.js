

import React from 'react';

const Chat = ({ messages }) => {
  return (
    <div style={{ flex: 1, overflowY: 'scroll', padding: '10px' }}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
            maxWidth: '60%',
            backgroundColor: msg.sender === 'me' ? '#d1ffd6' : '#fff',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9em' }}>{msg.content}</p>
          <p style={{ margin: 0, fontSize: '0.7em', textAlign: 'right', color: '#999' }}>
            {msg.timestamp}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
