


/** HomePage Component
 *  The HomePage component serves as the entry point for users to either sign in or sign up for the music player application.
 *  It provides a user friendly interface for authentication, with the option to toggle between sign-in and sign-up forms**/

import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Paper, Typography, Box, Button } from '@mui/material';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

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
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '1rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 'bold',
          marginBottom: '2rem',
        },
        h2: {
          marginBottom: '1rem',
        },
      },
    },
  },
});

function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitchToSignUp = () => {
    setIsSignUp(true);
  };

  const handleSwitchToSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          bgcolor="background.default"
          p={3}
        >
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h1" align="center" gutterBottom>
              Music Player
            </Typography>
            {!isSignUp ? (
              <>
                <SignIn onSwitchToSignUp={handleSwitchToSignUp} />
                <Button onClick={handleSwitchToSignUp} variant="text" color="secondary" fullWidth>
                  Don't have an account? Sign Up
                </Button>
              </>
            ) : (
              <>
                <SignUp />
                <Button onClick={handleSwitchToSignIn} variant="text" color="secondary" fullWidth>
                  Already have an account? Sign In
                </Button>
              </>
            )}
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;
