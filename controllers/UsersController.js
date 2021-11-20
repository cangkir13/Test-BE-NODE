const users = require('../models').user
const bycript = require('bcryptjs');
const globalres = require('../config/globalres');
const jwt = require('jsonwebtoken');
const config = require('../config')

class UsersController {
    
    static async register (req, res) {
        let {username, password} = req.body
        // check users
        let usersdata = await users.findOne({
            where : {
                username
            }
        })
        // if exist
        if (usersdata) {
            return res.status(400).json(globalres(false, 'Username sudah ada'))
        }

        // save user
        await users.create({
            username, password : bycript.hashSync(password, 8)
        })

        return res.json(globalres(true, "halo"))
    }

    static async login(req, res) {
        let {username, password} = req.body
        // check users
        let usersdata = await users.findOne({
            where : {
                username
            }
        })
        // check user
        if (!usersdata) {
            return res.status(404).json(globalres(false, 'Username tidak ditemukan'))
        }

        // check password
        if (!bycript.compareSync(password, usersdata.password)) {
            return res.status(401).json(globalres(false, "password salah"))
        }

        let token  = jwt.sign(usersdata.dataValues, config.JWT_SECRET, {expiresIn:"1days", algorithm:"HS256"})
        return res.json(globalres(true, "welcome", token))
    }
    
}

module.exports = UsersController