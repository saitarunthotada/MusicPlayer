
---

# Music Player App

A web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to sign up, sign in, manage playlists, add songs, and play music.

## Table of Contents

- [Overview](#overview)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Endpoints](#api-endpoints)

## Overview

This application consists of a frontend built with React and a backend developed using Node.js, Express, and MongoDB. Users can authenticate, manage playlists, and listen to music with a user-friendly interface.

## Frontend

The frontend is located in the `client` directory. It includes components for user authentication, displaying songs, managing playlists, and playing music.

### Directory Structure

- `client/`
    - `public/` - Public assets
    - `src/`
        - `components/` - React components
            - `Auth/` - Authentication components
                - `SignUp.js`
                - `SignIn.js`
            - `Playlists/` - Playlist management components
                - `AddSongToPlaylist.js`
                - `CreatePlaylist.js`
                - `PlaylistList.js`
                - `PlaylistSelector.js`
            - `Songs/` - Song-related components
                - `AddSong.js`
                - `SongList.js`
            - `pages/` - Page components
                - `HomePage.js`
                - `Dashboard.js`
        - `App.js` - Main application component
        - `index.js` - Entry point for React
    - `package.json` - Client-level dependencies

### Running the Frontend

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Backend

The backend is located in the `server` directory. It handles user authentication, song management, and playlist management.

### Directory Structure

- `server/`
    - `config/` - Configuration files
        - `db.js` - Database connection
    - `controllers/` - Request handling logic
        - `authController.js` - User authentication
        - `songController.js` - Song management
        - `playlistController.js` - Playlist management
    - `models/` - Database schemas
        - `User.js` - User schema
        - `Song.js` - Song schema
        - `Playlist.js` - Playlist schema
    - `routes/` - API routes
        - `authRoutes.js` - Authentication routes
        - `songRoutes.js` - Song routes
        - `playlistRoutes.js` - Playlist routes
    - `middleware/` - Middleware functions
        - `authMiddleware.js` - JWT authentication
    - `server.js` - Entry point for the server

### Running the Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Sign up a new user
- **POST** `/api/auth/signin` - Sign in an existing user

### Songs

- **GET** `/api/songs` - Retrieve all songs
- **POST** `/api/songs` - Add a new song (requires authentication)

### Playlists

- **POST** `/api/playlists` - Create a new playlist (requires authentication)
- **POST** `/api/playlists/add/song` - Add a song to a playlist (requires authentication)
- **GET** `/api/playlists/` - Get details of a playlist (requires authentication)

## Known Issues

### **Frontend**

**1. Fetching Songs from Playlists**
- **Issue**: The frontend cannot fetch and display songs from the playlists.
- **Current Status:** Checked if the API endpoint is correct, looked over the component code for mistakes, and network requests.
  
**2. Fetching Playlists to Add Songs** 
- **Issue**: The frontend cannot fetch playlists, preventing users from adding songs.
- **Current** Status: Checking API endpoint validity, React setup for API calls, and network requests.

**2. Playback Error** 
- **Issue**: Unable to play or pause the media
- **Current** Status: Used drive shareable link and it is not coverting into direct link to play. Still Unknown.

### **Backend**
- **Status**: All APIs are working as intended.
- **Current Status**: All endpoints have been tested and are functioning correctly.
---

