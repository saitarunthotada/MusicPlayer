

/** PlaylistSelector Component
 *  This component allows users to select a playlist from a dropdown menu. It fetches the list of playlists
   from the server and displays them**/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, FormControl, InputLabel, Select, MenuItem, Paper, Box } from '@mui/material';

function PlaylistSelector({ onSelect }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://ec2-3-27-172-52.ap-southeast-2.compute.amazonaws.com:5000/api/playlists', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlaylists(response.data);
      } catch (err) {
        console.error('Error fetching playlists:', err);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#1c1c1c' }}>
      <Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default" p={2}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Select Playlist
        </Typography>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select a playlist</InputLabel>
          <Select
            label="Select a playlist"
            onChange={(e) => onSelect(e.target.value)}
            defaultValue=""
            color="primary"
          >
            <MenuItem value="">Select a playlist</MenuItem>
            {playlists.map((playlist) => (
              <MenuItem key={playlist._id} value={playlist._id}>
                {playlist.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}

export default PlaylistSelector;
