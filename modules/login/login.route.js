const { Router } = require('express');
const { body, _ } = require('express-validator');

const loginCtrl = require('./login.controller');
const loginCtrlValidator = require('./login.validators');

const router = Router() // eslint-disable-line new-cap

router.route('/').post(body(loginCtrlValidator.login), loginCtrl.login)
router.route('/otp').post(body(loginCtrlValidator.otp), loginCtrl.otpLogin)

module.exports = router
