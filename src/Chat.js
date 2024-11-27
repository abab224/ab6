import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // サーバーのURL

const Chat = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { username: user.username, text: message };
      socket.emit('send_message', newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ようこそ、{user.username}さん</h2>
      <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.username === user.username ? 'right' : 'left' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: msg.username === user.username ? '#DCF8C6' : '#FFF',
                margin: '5px 0',
              }}
            >
              <strong>{msg.username}</strong>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力..."
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={sendMessage} style={{ padding: '10px 20px' }}>
        送信
      </button>
    </div>
  );
};

export default Chat;
