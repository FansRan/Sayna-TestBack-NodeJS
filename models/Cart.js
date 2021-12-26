const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    cartNumber: {
        type: String,
        unique: true,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: '1900',
        max: '2025',
        required: true 
    },
    default: {
        type: String,
        required: true,
    },
    user_id : {
        type: String,
        required: true
    }
});

cartSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.id;
        delete ret.user_id;
    }
});

module.exports = mongoose.model('Cart', cartSchema);
