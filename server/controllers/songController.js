const Song = require('../models/Song');


//retrieving songs
exports.getSongs = async (req, res) => {
    try{
        const songs = await Song.find();
        res.json(songs);
    } catch {
        res.status(500).json({ message: err.message});
    }
};

//adding new songs
exports.addSong = async (req, res) => {
    const { title, artist, url} = req.body;
    try{
        const song = new Song({ title, artist, url});
        await song.save();
        res.status(201).json(song);
    } catch(err) {
        res.status(505).json( { message: err.message});
    }
};

