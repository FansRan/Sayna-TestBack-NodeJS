const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Cart = db.Cart;

module.exports = {
    getById,
    update,
    delete: _delete,
    addCart
};

async function getById(id) {
    return await User.findById(id);
}

async function update(id, userParam) {
    // hash password if it was entered
    if (userParam.password) {
        userParam.password = bcrypt.hashSync(userParam.password, 10);
    }

    userParam.updatedAt = new Date();

    await User.findByIdAndUpdate(id, userParam);

    return {
        error: false,
        message: "Vos données ont été mises à jour",
    };
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
    return {
        error: false,
        message: "Votre compte et le compte de vos enfants ont été suprrimés avec succès",
    };
}

async function addCart(user_id, cartParam) {
    const cart = new Cart(cartParam);

    cart.user_id = user_id;

    // save cart
    await cart.save();

    return {
        error: false,
        message: "Vos données ont été mises à jour",
    };
}