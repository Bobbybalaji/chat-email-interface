import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

const MessageInput = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipient, subject, message }), // Send data to backend
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <div className="message-input">
      <Input
        clearable
        underlined
        label="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Enter recipient's email"
      />
      <Input
        clearable
        underlined
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter subject"
      />
      <Input
        clearable
        underlined
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <Button auto onClick={handleSendEmail}>Send</Button>
    </div>
  );
};

export default MessageInput;
