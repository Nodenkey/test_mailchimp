const express = require('express');
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express(); 

app.use(cors());

//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// Signup route
app.post('/signup', (req, res) => {
    console.log(req.body);
    // console.log(firstName);
   res.send(req.body);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));