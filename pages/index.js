import Layout from '../components/Layout';
import Chat from '../components/Chat';
import MessageInput from '../components/MessageInput';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { sender: 'me', content: 'Hello, John!', timestamp: '10:00 AM' },
    { sender: 'John Doe', content: 'Hi there!', timestamp: '10:01 AM' },
  ]);

  const handleSend = (message) => {
    const newMessage = {
      sender: 'me',
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <Layout>
      <Chat messages={messages} />
      <MessageInput onSend={handleSend} />
    </Layout>
  );
}
