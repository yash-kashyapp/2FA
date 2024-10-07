const { Router } = require('express');
const { body, _ } = require('express-validator');

const signupCtrl = require('./signup.controller');
const signupCtrlValidator = require('./signup.validators');

const router = Router()

router.route('/').get(signupCtrl.index)
router.route('/verify').get(signupCtrl.verify)
router.route('/').post(
    // body(signupCtrlValidator.post),
    signupCtrl.create
)

module.exports = router
