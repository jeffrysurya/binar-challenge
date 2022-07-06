const {UserAuth} = require('../../models');
const {nanoid} = require('nanoid')
const bcrypt = require('bcrypt');

exports.createUser = (req, res) => {
    // const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    const { email, username, password } = req.body;
    UserAuth.create(
        {
            user_id: nanoid(16),
            email,
            username,
            password
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => console.log(err));
}

exports.validateUser = (req, res) => {
    const { email, password } = req.body;
    const validEmail = UserAuth.findOne({
        where: {email}
    }).then((data) => {
        const validPassword = password === data.password;
        console.log(data.password)
        if (!validPassword) {
            res.json({
                message: "password is not valid"
            })
        } else {
            res.json({
                message: "you have access"
            })
        }
    })
    // console.log(result.password)
    // if (!validEmail) {
    //     res.json({
    //         message: "The email is not valid"
    //     })
    // }
    // // const validPassword = await bcrypt.compareSync(password, validEmail.password)
    // const validPassword = password === pass
    // console.log(pass)
    // if (!validPassword) {
    //     res.json({
    //         message: "password is not valid"
    //     })
    // } else {
    //     res.json({
    //         message: "you have access"
    //     })
    // }
}

exports.getAllUser = async (req, res) => {
    const user = await UserAuth.findAll({raw: true}).then(user => {
        
        const data = JSON.stringify(user,null,2)
        console.log(data.user_id)
        return res.render('dashboard', {data})})
        .then(data => res.json(data))
//         .catch(err => res.status(400).json(err));
}

exports.updatePassword = (req, res) => {
    const {email,password} = req.body;
    UserAuth.update({
        password
    }, {
        where: { email }
    }).then(() => 
    res.json({
        message: "Password Successfully updated"
    }))
}

exports.deleteUser = (req, res) => {
    const {email,password} = req.body;
    
    UserAuth.destroy({
        where: { email, password }
    }).then(() => 
    res.json({
        message: "user successfully deleted"
    }))
}

