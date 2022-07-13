module.exports = {
    home: (req,res) => {
        res.render('home')
    },

    game: (req,res) => {
        console.log(req.loggedIn)
        res.render('game')
    },
    login: (req,res) => {
        res.render('login')
    },
    signup: (req,res) => {
        res.render('signup')
    }

}