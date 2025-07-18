const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// GET route (e.g., for health check or testing)
router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET request to /api/contact is working.' });
});

// POST route to send email
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    console.log('Body Received:', req.body);
  }
});

module.exports = router;
