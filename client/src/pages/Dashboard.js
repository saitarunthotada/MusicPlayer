

/** Dashboard Component
  * This component serves as the main interface for the music player app.
  * It is styled with a dark theme using Material-UI's theming capabilities**/
import React, { useState } from 'react';
import { Container, Paper, Typography, Box, CssBaseline, Grid } from '@mui/material';
import SongList from '../components/Songs/SongList';
import AddSong from '../components/Songs/AddSong';
import PlaylistList from '../components/Playlists/PlaylistList';
import CreatePlaylist from '../components/Playlists/CreatePlaylist';
import AddSongToPlaylist from '../components/Playlists/AddSongToPlaylist';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
});

function Dashboard() {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    const fileId = song.url.split('/')[5];
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    setCurrentSong({ ...song, url: directUrl });
    console.log('Current song set:', { ...song, url: directUrl });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box my={4}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Typography variant="h4" gutterBottom>
              Minimalistic Player
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Paper elevation={0} sx={{ borderRadius: '16px', height: { xs: 'auto', md: 'calc(100% - 150px)' }, overflow: 'auto' }}>
                  <SongList onPlay={playSong} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box p={2} bgcolor="background.paper" borderRadius="16px" height="100%" display="flex" flexDirection="column">
                  {currentSong && (
                    <Box mb={2} p={2} bgcolor="background.paper" borderRadius="16px" flex="1" overflow="auto">
                      <Typography variant="h5" gutterBottom>Now Playing</Typography>
                      <Typography variant="h6">{currentSong.title} - {currentSong.artist}</Typography>
                      <audio controls style={{ width: '100%' }}>
                        <source src={currentSong.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </Box>
                  )}
                  <Box display="flex" flexDirection="column" gap={2}>
                    <AddSong />
                    <PlaylistList />
                    <CreatePlaylist />
                    <AddSongToPlaylist />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
