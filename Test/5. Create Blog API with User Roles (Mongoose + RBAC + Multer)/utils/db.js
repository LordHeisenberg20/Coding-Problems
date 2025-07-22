const mongoose = require('mongoose');   

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/MyDatabase');
        console.log('Database connected');
    } catch (error) {
        console.error('Error while connecting to Database', error.message);
    }
}

module.exports = { connectDB };
