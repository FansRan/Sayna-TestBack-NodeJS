const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    cvc: {
        type: String,
        required: true
    },
    cart_id: {
        type: String,
        required: true
    },       
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
