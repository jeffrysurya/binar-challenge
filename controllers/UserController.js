const {UserAuth} = require('../../models');
const { uniqueId } = require('../utility/nanoid');
const { comparePassword } = require('../utility/bcrypt')


class UserAuthController {
    static register(req,res) {
        const { email, username, password,role } = req.body;
    UserAuth.create(
        {
            user_id: uniqueId,
            email,
            username,
            password,
            role,
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => console.log(err));
}

    static async login(req, res) {
        try {
          const { username, password } = req.body;
          const user = await UserAuth.findOne({
            where: {
                username,
            },
          });
          if (!user) {
            return res.status(401).json({
                message: `Invalid Username or Password`,
            })
          }
        const isMatch = await comparePassword(password, user.password);
            if (isMatch) {
                const payload = {
                    id: user.id,
                    username: user.username,
                    role: user.role,
                };
                const access_token = generateToken(payload);
                return res.status(200).json({
                    access_token: access_token,
                });
            } else {
                return res.status(401).json({
                    message: `Invalid Username or Password`,
                });
            }

        } catch(err) {
            return res.status(401).json(err);
        }
        }
    }

    module.exports = {UserAuthController }
// exports.validateUser = (req, res) => {
//     const { email, password } = req.body;
//     const validEmail = UserAuth.findOne({
//         where: {email}
//     }).then((data) => {
//         const validPassword = password === data.password;
//         console.log(data.password)
//         if (!validPassword) {
//             res.json({
//                 message: "password is not valid"
//             })
//         } else {
//             res.json({
//                 message: "you have access"
//             })
//         }
//     })
// }

// exports.getAllUser = async (req, res) => {
//     const user = await UserAuth.findAll({raw: true}).then(user => {
        
//         const data = JSON.stringify(user,null,2)
//         console.log(data.user_id)
//         return res.render('dashboard', {data})})
//         .then(data => res.json(data))
// //         .catch(err => res.status(400).json(err));
// }

// exports.updatePassword = (req, res) => {
//     const {email,password} = req.body;
//     UserAuth.update({
//         password
//     }, {
//         where: { email }
//     }).then(() => 
//     res.json({
//         message: "Password Successfully updated"
//     }))
// }

// exports.deleteUser = (req, res) => {
//     const {email,password} = req.body;
    
//     UserAuth.destroy({
//         where: { email, password }
//     }).then(() => 
//     res.json({
//         message: "user successfully deleted"
//     }))
// }