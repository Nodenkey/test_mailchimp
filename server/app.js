const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');


const app = express(); 

//body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Signup route
app.post('/signup', (req, res) => {
    const {firstName, lastName, email} = req.body;
    if(!firstName || !lastName || !email){
        // res.sendStatus(404)
    } else{
        
        // res.send("<h2>sent response</h2>")
        res.json({firstName, lastName, email});
        res.sendStatus(200);
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));