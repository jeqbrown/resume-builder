const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Import routes
const authRoute = require('./routes/auth');
const carsRoute = require('./routes/cars');
const postRoute = require('./routes/posts');

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);


//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/cars', carsRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server is up and running'));
