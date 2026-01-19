const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', error=>{console.error(error)});
db.once('open', ()=>console.log("Connected to MongoDB"));

// read json from request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define routes
const movieRoutes = require('./routes/posts');
app.use('/post', movieRoutes);

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});