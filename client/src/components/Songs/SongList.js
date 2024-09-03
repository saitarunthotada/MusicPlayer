

/** SongList Component
 *  This component displays a list of songs fetched. Users can play a song by clicking the Play button next to each song**/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, ListItem, ListItemText, Typography, Paper, Divider } from '@mui/material';

function SongList({ onPlay }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/songs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSongs(res.data);
      } catch (err) {
        console.error('Error fetching songs:', err);
      }
    };
    fetchSongs();
  }, []);

  const handlePlay = (song) => {
    if (onPlay) onPlay(song);
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Songs
      </Typography>
      <List>
        {songs.length === 0 ? (
          <ListItem>
            <ListItemText primary="No songs available" />
          </ListItem>
        ) : (
          songs.map((song) => (
            <React.Fragment key={song._id}>
              <ListItem>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePlay(song)}
                  style={{ marginRight: '10px' }}
                >
                  Play
                </Button>
                <ListItemText primary={`${song.title} - ${song.artist}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        )}
      </List>
    </Paper>
  );
}

export default SongList;
