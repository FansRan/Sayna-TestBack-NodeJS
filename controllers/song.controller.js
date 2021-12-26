const express = require('express');
const router = express.Router();
const songService = require('../services/song.service');

module.exports = {
    getAll,
    getById
};

function getAll(req, res, next) {
    songService.getAll()
        .then(songs => res.status(200).json(songs))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(song => res.status(201).json(song))
        .catch(err => next(err));
}