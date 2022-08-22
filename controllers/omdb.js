const express = require('express')
const router = express.Router()

// axios library for calling API's
const axios = require('axios');

// loads environment variables from a .env file
require('dotenv').config();
const API_KEY = process.env.API_KEY;

router.get('/lotr', function(req, res) {
    const queryOptions = {
        params: {
            s: 'the lord of the rings',
            apikey: API_KEY,
            type: 'movie'
        }
    };

    axios.get('http://www.omdbapi.com', queryOptions)
        .then(function (response) {
            // handle success
            // res.send(response.data['Search']);
            let context = {
                data: response.data['Search']
            };
            res.render('index.ejs', context);
        })
        .catch(function (error) {
            // handle error
            console.log(error.message);
    })
});

module.exports = router 