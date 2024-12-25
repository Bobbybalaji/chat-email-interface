// components/Chat.js
import { useEffect, useState } from 'react';
import '../styles/Chat.css'; // Make sure the file exists in the 'styles' folder

const Chat = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch('/api/fetchEmails');
      const data = await response.json();
      setEmails(data); // Update state with fetched emails
    };

    fetchEmails(); // Call the function when the component mounts
  }, []);

  return (
    <div className="chat-container">
      {emails.map((email, index) => (
        <div key={index} className="chat-message">
          <div className="message-header">
            <strong>{email.sender}</strong> to <strong>{email.recipient}</strong>
          </div>
          <div className="message-subject">{email.subject}</div>
          <div className="message-body">{email.message}</div>
          <div className="message-timestamp">{email.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
