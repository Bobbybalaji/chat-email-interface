import '../styles/Chat.css'; // Ensure the styles are properly linked
import { useEffect, useState } from 'react';

const Chat = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state for fetch
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('/api/fetchEmails');
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        setEmails(data);  // Update state with fetched emails
      } catch (error) {
        setError(error.message);  // Set error message if fetch fails
      } finally {
        setLoading(false);  // Set loading to false once fetch completes
      }
    };

    fetchEmails(); // Call the function when the component mounts
  }, []);

  if (loading) {
    return <div>Loading emails...</div>;  // Display a loading message
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error if fetch fails
  }

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
