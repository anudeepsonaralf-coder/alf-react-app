const db = require('../config/db');

const User = {
  findByEmail: (email_id, callback) => {
    const sql = 'SELECT * FROM loginuser WHERE username = ?';
    db.query(sql, [email_id], callback);
  },

  getAllEmployees: (callback) => {
    const sql = 'SELECT * FROM loginuser WHERE status = 1';
    db.query(sql, callback);
  }
};

module.exports = User;