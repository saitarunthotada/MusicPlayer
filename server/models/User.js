const mongoose = require('mongoose')

//Mongoose schema for users
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}]
});

module.exports = mongoose.model('User', userSchema);