
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recipient, subject, body } = req.body;

    try {
      // Simulate sending an email
      console.log(`Sending email to ${recipient}: ${subject}`);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
