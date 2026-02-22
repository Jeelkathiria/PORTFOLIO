const express = require('express');
const { submitContactForm, getMessages, markAsRead } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', submitContactForm);
router.get('/', protect, getMessages);
router.put('/:id/read', protect, markAsRead);

module.exports = router;
