const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

module.exports = {
    update,
    getCurrent,
    delete: _delete,
    addCart
};

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.user.sub, req.body)
        .then(result => res.status(200).json(result))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.user.sub)
        .then(result => res.status(200).json(result))
        .catch(err => next(err));
}

function addCart(req, res, next) {
    userService.addCart(req.user.sub, req.body)
        .then(result => res.status(200).json(result))
        .catch(err => next(err));
}