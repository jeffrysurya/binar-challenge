const router = require('express').Router();
const {UserAuthController} = require('../controllers/UserController')
const PageController = require('../controllers/PageController');

router.get('/login', PageController.login);
router.get('/signup', PageController.signup);
router.post('/login', UserAuthController.login);
router.post('/signup', UserAuthController.register)

module.exports = router;
