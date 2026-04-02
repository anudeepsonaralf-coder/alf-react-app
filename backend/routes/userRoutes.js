const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Employee routes
router.get('/employees', userController.employees);

module.exports = router;