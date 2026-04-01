const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.post('/login', authController.login);

// Employee routes
router.post('/employees', userController.employees);

module.exports = router;