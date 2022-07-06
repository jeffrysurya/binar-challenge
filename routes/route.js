module.exports = (app) => {
const UserAuth = require('../controllers/UserController')

var router = require('express').Router();

app.get('/', (req,res) => {
    res.render('index', {title: 'Traditional Game'});
})

app.get('/game', (req,res) => {
    res.render('game', {title: 'Rock Paper Scissors'});
})

app.get('/dashboard', UserAuth.getAllUser);

app.get('/signup', (req,res) => {
    res.render('signup');
})

app.get('/login', (req,res) => {
    res.render('login');
})

router.post('/signup', UserAuth.createUser)

router.post('/login', UserAuth.validateUser)

router.get('/login', UserAuth.getAllUser)

router.put('/login', UserAuth.updatePassword)
router.delete('/login', UserAuth.deleteUser)



app.use("/api", router)
}