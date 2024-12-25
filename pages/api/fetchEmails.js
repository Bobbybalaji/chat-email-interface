// pages/api/fetchEmails.js
export default function handler(req, res) {
  const emails = [
    {
      sender: 'john.doe@example.com',
      recipient: 'jane.doe@example.com',
      subject: 'Meeting Tomorrow',
      message: 'Hi Jane, Just wanted to confirm our meeting tomorrow at 10 AM.',
      timestamp: '2024-12-25 10:30 AM',
    },
    {
      sender: 'jane.doe@example.com',
      recipient: 'john.doe@example.com',
      subject: 'Re: Meeting Tomorrow',
      message: 'Got it! See you at 10 AM tomorrow.',
      timestamp: '2024-12-25 10:35 AM',
    },
  ];

  res.status(200).json(emails); // Respond with the email data
}
