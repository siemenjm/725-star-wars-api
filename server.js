const express = require('express');

// app configuration
const app = express();
const PORT = 4000;

// controllers
const omdbController = require('./controllers/omdb')

// middleware
app.set('view engine', 'ejs');
app.use('/omdb', omdbController);


app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`)
});
