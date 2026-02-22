const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const contact = new Contact({ name, email, subject, message });
        await contact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find({}).sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const markAsRead = async (req, res) => {
    try {
        const message = await Contact.findById(req.params.id);
        if (message) {
            message.isRead = true;
            await message.save();
            res.json({ message: 'Marked as read' });
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitContactForm, getMessages, markAsRead };
