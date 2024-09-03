
//Express router for handling song-related routes
const express = require('express');
const router = express.Router();
const { getSongs, addSong } = require('../controllers/songController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getSongs);
router.post('/', authMiddleware, addSong);

module.exports = router;