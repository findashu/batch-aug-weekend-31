const router = require('express').Router();
const controller = require('./userController')


router.route('/signup')
        .post(controller.createUser);

router.route('/signin').post(controller.login)


module.exports = router