// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recipient, subject, message } = req.body; // Extract email data from request body

    // Set up Nodemailer transporter using Gmail SMTP (You can use other providers)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password',  // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com', // Sender's email
      to: recipient,  // Recipient's email
      subject: subject, // Email subject
      text: message, // Email message body
    };

    try {
      // Send the email using Nodemailer
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
