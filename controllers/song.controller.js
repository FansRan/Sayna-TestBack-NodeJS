const songService = require('../services/song.service');

module.exports = {
    add,
    getAll,
    getById
};

function add(req, res, next) {
    songService.create(req.body)
        .then(() => res.status(200).json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    songService.getAll()
        .then(songs => res.status(200).json(songs))
        .catch(err => next(err));
}

function getById(req, res, next) {
    songService.getById(req.params.id)
        .then(song => res.status(201).json(song))
        .catch(err => next(err));
}