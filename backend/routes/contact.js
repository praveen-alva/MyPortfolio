const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMessage = await Contact.create({ name, email, subject, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}: ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    };

    await transporter.sendMail(mailOptions);

    // ✅ Emit real-time event via Socket.io
    req.io.emit('new-notification', {
      title: `Message from ${name}`,
      body: subject,
      timestamp: new Date()
    });

    res.status(200).json({ message: 'Message saved and email sent!', data: newMessage });
  } catch (error) {
    console.error('Backend error:', error);
    res.status(500).json({ message: 'Message is not saved', error: error.message });
  }
});

module.exports = router;
