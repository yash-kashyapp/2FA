const { Router } = require('express');
const otpCtrl = require('./otp.controller');
const requireAuth = require('./../../middlewares/jwt-middleware');
const router = Router()

router.route('/').post(otpCtrl.create)
router.route('/').put(otpCtrl.update)
router.route('/').delete(otpCtrl.destroy)

module.exports = router
