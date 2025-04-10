const mongoose = require('mongoose');
const mongoURI = require('./config').mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;