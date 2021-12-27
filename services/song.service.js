const db = require('_helpers/db');
const Song = db.Song;

module.exports = {
    create,
    getAll,
    getById,
};

async function create(songParam) {
    const song = new Song(songParam);

    // save user
    await song.save();
}

async function getAll() {
    const songs = await Song.find();
    return {
        error: false,
        songs : songs
    }
}

async function getById(id) {
    const song = await Song.findById(id);
    return {
        error: false,
        songs: song
    }
}