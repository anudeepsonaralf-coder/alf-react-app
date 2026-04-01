const User = require('../models/userModel');

exports.employees = (req, res) => {

  User.getAllEmployees(email, async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'DB error', error: err });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'No Data Found!' });
    }

    // Success
    res.json({
      message: 'All Active Employees.',
      user: results
    });
  });
};