


/** SignUp Component
 *  This component renders a sign-up form for new users to create an account in the application **/
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://ec2-54-206-145-102.ap-southeast-2.compute.amazonaws.com:5000/api/auth/signup', { email, password });
      alert('User created, You can now sign in.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', width: '100%', maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Paper>
  );
}

export default SignUp;
