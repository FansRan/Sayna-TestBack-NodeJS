const mongoose = require('mongoose');
require('mongoose-type-email');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 2
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true,
        maxLength: 255,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    sexe: {
        type: String,
        enum: ["H", "F"],
        required: true,
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER",
        required: true,
    },
    dateNaissance: {
        type: Date,
        min: '1900-01-01',
        max: '2021-11-27',
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    subscription: {
        type: String,
        required: true,
        maxLength: 10
    },
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.id;
        delete ret.password;
    }
});

module.exports = mongoose.model('User', userSchema);
