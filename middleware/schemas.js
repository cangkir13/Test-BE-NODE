const Joi = require('joi')

module.exports = {
    loginValid : Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    }),
    registerUser : Joi.object({
        username : Joi.string().required(),
        password : Joi.string().required(),
    }),
};