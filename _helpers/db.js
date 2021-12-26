const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/User'),
    Auth: require('../models/Auth'),
    Cart: require('../models/Cart'),
    Song: require('../models/Song')
};