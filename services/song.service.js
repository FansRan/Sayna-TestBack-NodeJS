const db = require('_helpers/db');
const Song = db.Song;

module.exports = {
    getAll,
    getById,
};

async function getAll() {
    const songs = await Song.find();
    return {
        error: false,
        ...songs.toJSON()
    }
}

async function getById(id) {
    const song = await Song.findById(id);
    return {
        error: false,
        ...song.toJSON()
    }
}