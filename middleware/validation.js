const globalresponse = require('../config/globalres'); 
const validation = (schema, type) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[type])
        const valid = error == null;
        
        if(valid) {
            return next();
        } else {
            const { details } = error;
            const message = details.map(e => e.message ).join(',');
            let response = globalresponse(false, `${message} with type ${type}`)
            return res.status(422).json(response)
        }
    }
}

module.exports = validation