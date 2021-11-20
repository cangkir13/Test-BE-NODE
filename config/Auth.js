const config = require('./index')
const globalres = require('./globalres');
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.headers.authorization
    
    if (!token) {
        return res.status(403).json(globalres(false, "header must be with 'authorization' : 'Bearer tokenxxx'"))
    }
    token = token.split(" ")[1]
    // JWT VERIFY
    let tokenValid = jwt.verify(token, config.JWT_SECRET, (err, result) => {
        if (err) {
            return {
                success : false,
                message : err.message
            }
        } else {
            return {
                success : true,
                result : result
            }
        }
    })
    if (!tokenValid.success) {
        return res.status(401).json(globalres(false, tokenValid.message))
    }
    req.user = tokenValid.result
    next()
    
}