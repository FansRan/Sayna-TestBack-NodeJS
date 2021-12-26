const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    url: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

songSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Song', songSchema);
