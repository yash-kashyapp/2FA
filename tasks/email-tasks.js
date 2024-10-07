const config = require('./../config/config');
const sendWelcomeEmail = require('./../emails/signup/signup-email');

module.exports = USER_SIGNUP_EMAIL = ({ user, token }) => {
  return sendWelcomeEmail(user.email, {
    name: user.name,
    username: user.username,
    email: user.email,
    account_verification_token: token,
    account_verification_url: `${config.app_url}/api/signup/verify?token=${token}`
  })
}
