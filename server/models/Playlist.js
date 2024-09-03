const mongoose = require('mongoose');

//Mongoose schema for a Playlist
const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song'}]
});

module.exports = mongoose.model('Playlist', playlistSchema);