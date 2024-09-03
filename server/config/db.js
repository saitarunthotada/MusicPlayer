const mongoose = require('mongoose');

//For DataBase connection, Atlas personal Database called musicPlayer)
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://username:Tarundb@cluster0.mo5kpjl.mongodb.net/MusicPlayer?retryWrites=true&w=majority',{
        });
        console.log('MongoDB(Atlas) connected ');
    } catch (err) {
        console.error(err.message);
        console.log('or I have to add my new IP address to access from Atlas, sorry for the Inconvenience :(');
        process.exit(1);
    }
};

module.exports = connectDB;