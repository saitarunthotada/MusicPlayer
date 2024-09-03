


/** PlaylistList Component
 *  This component displays a list of playlists and, upon selection, shows the songs contained
 *  within the selected playlist**/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

function PlaylistList() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlistSongs, setPlaylistSongs] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        const response = await axios.get('http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/playlists', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Playlists fetched:', response.data);
        setPlaylists(response.data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  useEffect(() => {
    if (selectedPlaylist) {
      const fetchPlaylistDetails = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('No token found');
            return;
          }
          const response = await axios.get(`http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/playlists/${selectedPlaylist}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('Playlist details fetched:', response.data);
          setPlaylistSongs(response.data.songs || []);
        } catch (error) {
          console.error('Error fetching playlist details:', error);
        }
      };

      fetchPlaylistDetails();
    }
  }, [selectedPlaylist]);

  return (
    <Paper elevation={3} style={{ padding: '2rem', borderRadius: '8px', backgroundColor: '#1c1c1c' }}>
      <Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default" p={3}>
        <Typography variant="h5" color="text.primary" gutterBottom>
          Playlists
        </Typography>
        {playlists.length === 0 ? (
          <Typography color="text.secondary">No playlists found</Typography>
        ) : (
          <Box width="100%">
            <List>
              {playlists.map((playlist) => (
                <ListItem
                  button
                  key={playlist._id}
                  onClick={() => setSelectedPlaylist(playlist._id)}
                  divider
                >
                  <ListItemText primary={playlist.name} />
                </ListItem>
              ))}
            </List>
            {selectedPlaylist && (
              <Box mt={2}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Songs in Playlist
                </Typography>
                {playlistSongs.length === 0 ? (
                  <Typography color="text.secondary">No songs found</Typography>
                ) : (
                  <List>
                    {playlistSongs.map((song) => (
                      <ListItem key={song._id} divider>
                        <ListItemText primary={`${song.title} - ${song.artist}`} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default PlaylistList;
