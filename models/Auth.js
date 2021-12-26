const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
    email: {
        type: String
    },
    tentative: {
        type: Number
    },
    attendre: {
        type: Boolean
    },
    dernier_tentative: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Auth', authSchema);
