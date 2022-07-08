const router = require('express').Router();
const UserAuths = require('../controllers/UserController')
const PageController = require('../controllers/PageController');

router.get('/', PageController.home);
router.post('/', UserAuths.login);

module.exports = router;
