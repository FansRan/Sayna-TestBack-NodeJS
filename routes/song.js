const router = require('express').Router();
const songController = require('../controllers/song.controller');

//Listing des sources audios
router.get('/', songController.getAll);

//Récuperation d'une source audio
router.get('/:id', songController.getById)

module.exports = router;