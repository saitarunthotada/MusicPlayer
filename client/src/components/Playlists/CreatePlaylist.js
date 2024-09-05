

/** CreatePlaylist Component
 *  This component provides a form for users to create a new playlist **/

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';

function CreatePlaylist() {
  const [name, setName] = useState('');
    const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://ec2-3-27-172-52.ap-southeast-2.compute.amazonaws.com/api/playlists', { name }, {
        headers: { Authorization: token },
      });
      alert('Playlist created successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to create playlist. Please try again.');

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
            Create New Playlist
          </Typography>

          <TextField
            label="Playlist Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Playlist
          </Button>

          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </Paper>
    );
  }

  export default CreatePlaylist;