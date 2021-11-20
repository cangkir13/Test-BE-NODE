require('dotenv').config()
const env = process.env;
const config = {
    PORT : env.PORT || 3000,
    JWT_SECRET : env.JWT_SECRET || 'test'
}

module.exports = config