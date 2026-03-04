const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// POST — submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to database
    const contact = await Contact.create({ name, email, message });

    // Send email notification
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        replyTo: email,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
      // Don't fail the request if email fails — data is saved
    }

    res.status(201).json({ message: "Message sent successfully!", contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all messages (admin)
exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE message (admin)
exports.deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};