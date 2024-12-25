
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Placeholder data
      const emails = [
        { id: 1, sender: 'John Doe', content: 'Hello!', timestamp: '10:00 AM' },
        { id: 2, sender: 'Jane Smith', content: 'Hi there!', timestamp: '10:15 AM' },
      ];
      res.status(200).json(emails);
    } catch (error) {
      console.error('Error fetching emails:', error);
      res.status(500).json({ error: 'Failed to fetch emails' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
