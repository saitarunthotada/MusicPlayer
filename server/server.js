

//Main entry point for the Express server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const songRoutes = require('./routes/songRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

//Initialize the Express application
const app = express();

//Connect to MongoDB database
connectDB();

//Middleware setup
app.use(cors()); //Enable CORS for cross-origin requests
app.use(express.json()); //Parse incoming JSON requests

app.use('/api/auth', authRoutes); //Routes for user authentication
app.use('/api/songs', songRoutes); //Routes for song management
app.use('/api/playlists', playlistRoutes); //Routes for playlist management

//Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
