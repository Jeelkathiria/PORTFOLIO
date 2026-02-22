const express = require('express');
const { loginAdmin, registerAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginAdmin);
// router.post('/register', registerAdmin); // Keep commented for security after first use

module.exports = router;
