// express routes
const router = require('express').Router();
// joi validation and schemas validate
const validate = require('../middleware/validation');
const schemas = require('../middleware/schemas');
// type request
const typeValidator = ['body', 'query', 'params']
// constrollers
const UsersController = require('../controllers/UsersController');
// middleware jwt
const auth = require('../config/Auth');
const PositionController = require('../controllers/PositionController');


// routes 
router.post('/register', validate(schemas.registerUser, typeValidator[0] ), UsersController.register);
router.post('/login', validate(schemas.loginValid, typeValidator[0] ), UsersController.login);
router.get('/position/:ID', auth, PositionController.getId);
router.get('/position', auth, PositionController.getlits);



module.exports = router