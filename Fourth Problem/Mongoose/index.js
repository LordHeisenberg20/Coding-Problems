const express = require('express');
const mongoose = require('mongoose');
const StudentRouter = require('../routes/StudentRoutes');
const app = express();
app.use(express.json());

function connectDB() {
    mongoose
        .connect('mongodb://localhost:27017/StudentDatabase')
        .then(() => {
            console.log('Connected to Database');
        })
        .catch((err) => {
            console.error('Error connecting to Database:', err);
        });
}

app.use('/students', StudentRouter);    

app.get('/', (req, res) => {
    res.send('Student Admssion and Management System');
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
    connectDB();
}
);
