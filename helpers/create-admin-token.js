const jwt = require('jsonwebtoken');
const config = require('./../config/config');

/**
 * Create temporary jwt token for testing.
 *
 * @param {*} is_admin
 *
 * @returns {String}
 */
 module.exports = function() {
  return jwt.sign(
    {
      _id: '5b22a2a9eef0fe3c488ff835',
      email: 'admin@admin.com',
      username: 'admin',
      name: 'Prashant Shekher',
      mobile: '9999999999',
      is_admin: true,
      is_verified: true,
      is_active: true,
      is_otp: false
    },
    config.jwtSecret
  )
}
