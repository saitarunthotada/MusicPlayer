const express = require('express');
const router = express.Router();

//Express router for handling playlist related routes
const { createPlaylist, addSongToPlaylist, getPlaylist, getAllPlaylists } = require('../controllers/playlistController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createPlaylist);
router.post('/add/song', authMiddleware, addSongToPlaylist);
router.get('/:playlistId', authMiddleware, getPlaylist);
router.get('/', authMiddleware, getAllPlaylists);

module.exports = router;
