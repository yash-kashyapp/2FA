const { Router } = require('express');

const loginRoutes = require('./modules/login/login.route');
const userRoutes = require('./modules/user/user.route');
const resetRoutes = require('./modules/reset/reset.route');
const otpRoutes = require('./modules/otp/otp.route');
const signupRoutes = require('./modules/signup/signup.route');

const router = Router()

router.get('/', (req, res) => res.send('OK'))
router.use('/login', loginRoutes)
router.use('/user', userRoutes)
router.use('/otp', otpRoutes)
router.use('/reset', resetRoutes)
router.use('/signup', signupRoutes)

router.get('/health-check', (req, res) => res.send('OK'))

module.exports = router
