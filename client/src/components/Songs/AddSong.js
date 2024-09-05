

/**AddSong Component
 * This component allows users to add a new song by filling out a form with the song's title, artist, and URL.
 * It handles form submission, sends the song data to the server, and provides feedback to the user**/

import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import axios from 'axios';

function AddSong() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');
  const [error] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://ec2-3-27-172-52.ap-southeast-2.compute.amazonaws.com:5000/api/songs', { title, artist, url }, {
        headers: { Authorization: token },
      });
      alert('Song added successfully');
    } catch (err) {
      console.error(err);
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
            Add New Song
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <TextField
            label="Artist"
            variant="outlined"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <TextField
            label="URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Song
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </Paper>
    );
  }

  export default AddSong;