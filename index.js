const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// routes 
const routes = require('./config/routes');

/**
 * set .env first
 */
const config = require('./config');

// cors API
app.use(cors());
// parsing body json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes)

// error service
app.use(function (err, req, res, next) {
    if (err) {
        return res.status(500).json({
            success:false,
            message:`Sory, Something broke ${err.message}`
        })
    }
})

// not found endpoint
app.use(function (req, res, next) {
    return res.status(403).json({
        success:false,
        message:"No found endpoint"
    })
})

app.listen(config.PORT, () => {
    console.log(`PORT ${config.PORT}`)
})
