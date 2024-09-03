

/** AddSongToPlaylist Component
 *  This component allows users to add a song to an existing playlist **/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Typography, MenuItem, FormControl, InputLabel, Select, Paper, Box } from '@mui/material';

function AddSongToPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const [songId, setSongId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/playlists', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlaylists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlaylists();
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/songs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSongs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSongs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/playlists/add/song', { playlistId, songId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Song added to playlist successfully!');
      setPlaylistId('');
      setSongId('');
    } catch (err) {
      console.error(err);
      setError('Failed to add song to playlist. Please try again.');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', borderRadius: '8px', backgroundColor: '#1c1c1c' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ gap: 2 }}
      >
        <Typography variant="h5" color="text.primary" gutterBottom>
          Add Song to Playlist
        </Typography>

        <FormControl fullWidth variant="outlined" required>
          <InputLabel>Playlist</InputLabel>
          <Select
            value={playlistId}
            onChange={(e) => setPlaylistId(e.target.value)}
            label="Playlist"
          >
            <MenuItem value=""><em>Select Playlist</em></MenuItem>
            {playlists.map((playlist) => (
              <MenuItem key={playlist._id} value={playlist._id}>
                {playlist.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined" required>
          <InputLabel>Song</InputLabel>
          <Select
            value={songId}
            onChange={(e) => setSongId(e.target.value)}
            label="Song"
          >
            <MenuItem value=""><em>Select Song</em></MenuItem>
            {songs.map((song) => (
              <MenuItem key={song._id} value={song._id}>
                {song.title} - {song.artist}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Song
        </Button>

        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Paper>
  );
}

export default AddSongToPlaylist;
