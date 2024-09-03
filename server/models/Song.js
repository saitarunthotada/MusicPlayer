const mongoose = require('mongoose');


//Mongoose Schema for a song
const songSchema = new mongoose.Schema({
    title: { type: String, required: true},
    artist: { type: String, required: true},
    url: { type: String, required: true}
})

module.exports = mongoose.model('Song', songSchema);