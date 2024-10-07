const httpStatus = require('http-status');
const APIError = require('./../../helpers/api-error');
const createRandomToken = require('./../../helpers/create-random-token');
const UserRepo = require('./../../repos/user-repo');
const speakeasy = require('speakeasy');

const {
  MSG_EMAIL_EXISTS,
  MSG_USERNAME_EXISTS,
  GLOBAL_EXPIRATION,
  MSG_SIGNUP,
  MSG_UNABLE_VERIFY,
  MSG_VERIFY_OK
} = require('../../constants');

/**
 * Renders sign up page.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @returns {Promise}
 */
async function index(req, res, next) {
  return res.render('signup', { title: MSG_SIGNUP })
}

/**
 * Renders sign up page.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @returns {Promise}
 */
async function verify(req, res, next) {
  const user = await UserRepo.findByVerificationToken(req.query.token)

  if (!user) {
    return res.status(404).render('signup/verify', {
      title: MSG_SIGNUP,
      message: MSG_UNABLE_VERIFY
    })
  }

  user.is_verified = true
  user.is_active = true
  user.account_verification_token = undefined
  user.account_verification_expiration = undefined

  await user.save()

  return res.render('signup/verify', {
    title: MSG_SIGNUP,
    message: MSG_VERIFY_OK
  })
}

/**
 * Generate temporary secret key.
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
async function create(req, res, next) {
  try {
    const { name, username, email, password } = req.body
    const emailExists = await UserRepo.existsByKey('email', email)

    if (emailExists) {
      throw new Error(MSG_EMAIL_EXISTS)
    }

    const usernameExists = await UserRepo.existsByKey('username', username)

    if (usernameExists) {
      throw new Error(MSG_USERNAME_EXISTS)
    }

    const token = await createRandomToken()

    const secret = speakeasy.generateSecret()

    // user.otp_tmp_secret = secret.base32

    const user = await UserRepo.create({
      name,
      username,
      email,
      password,
      is_verified: false,
      is_active: false,
      account_verification_token: token,
      otp_secret : secret.base32,
      account_verification_expiration: GLOBAL_EXPIRATION
    })

    return res.json({
      user: {...user.getPublicFields(),account_verification_token: token}
    })
  } catch (error) {
    console.log("in error phase")
    const err = new APIError(error.message, httpStatus.BAD_REQUEST)
    return next(err)
  }
}

module.exports = { index, create, verify }
