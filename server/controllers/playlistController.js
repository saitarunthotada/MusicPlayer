const Playlist = require('../models/Playlist');
const User = require('../models/User');
const Song = require('../models/Song');

// Create a new playlist
exports.createPlaylist = async (req, res) => {
    const { name } = req.body;
    try {
        const playlist = new Playlist({ name, user: req.user.id });
        await playlist.save();
        await User.findByIdAndUpdate(req.user.id, { $push: { playlists: playlist._id } });
        res.status(201).json(playlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a song to a playlist
exports.addSongToPlaylist = async (req, res) => {
    const { playlistId, songId } = req.body;
    try {
        await Playlist.findByIdAndUpdate(playlistId, { $push: { songs: songId } });
        res.json({ message: 'Song added to playlist' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific playlist by ID
exports.getPlaylist = async (req, res) => {
    const { playlistId } = req.params;
    try {
        const playlist = await Playlist.findById(playlistId).populate('songs');
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        res.json(playlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add this function if it's missing
exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.id }).populate('songs');
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

