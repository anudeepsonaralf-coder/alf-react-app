const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  User.findByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'DB error', error: err });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    const user = results[0];

    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Success
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email
      }
    });
  });
};