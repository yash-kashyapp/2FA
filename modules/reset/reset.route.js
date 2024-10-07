const { Router } = require('express');
const { body, _ } = require('express-validator');

const resetCtrl = require('./reset.controller');
const resetCtrlValidator = require('./reset.validators');

const router = Router()

router.route('/').get(resetCtrl.index)
router.route('/').post(
    body(resetCtrlValidator.post),
    resetCtrl.create
)
router.route('/').put(
    body(resetCtrlValidator.put),
    resetCtrl.update
)

module.exports = router
