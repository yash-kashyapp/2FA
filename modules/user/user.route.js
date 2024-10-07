const { Router } = require('express');
//const { expressjwt: jwt } = require("express-jwt")
const { body, _ } = require('express-validator');
const userCtrl = require('./user.controller');
const userCtrlValidator = require('./user.validators');
const config = require('./../../config/config');
const requireOtp = require('./../../middlewares/otp-middleware');
const requireAuth = require('./../../middlewares/jwt-middleware');

const router = Router()
// OR
// get an instance of router
// var router = express.Router();

router.route('/').get(requireAuth, userCtrl.user)

router
  .route('/email')
  .post(
    requireAuth,
    body(userCtrlValidator.email),
    requireOtp,
    userCtrl.email
  )

router.route('/email').get(userCtrl.emailVerify)

router
  .route('/password')
  .post(
    requireAuth,
    body(userCtrlValidator.password),
    requireOtp,
    userCtrl.password
  )

router
  .route('/profile')
  .post(
    requireAuth,
    body(userCtrlValidator.email),
    requireOtp,
    userCtrl.profile
  )

module.exports = router
