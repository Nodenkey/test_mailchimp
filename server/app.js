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
    const {firstName, lastName, email} = req.body.userDetails;
    console.log(email);

    const dc = 'us2';
    const api_key = '58dd83d33f7108aa7269ca717a9cc706-us2';
    const id = 'fe8c09514b'

    //construct req data
    const data = {
        members: [
            {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
        ]
    };

    const postData = JSON.stringify(data);
    
    const options = {
        url: `https://${dc}.api.mailchimp.com/3.0/lists/${id}`,
        method: 'POST',
        headers: {
            Authorization: `auth ${api_key}`
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if(err){
            // res.sendStatus(400).send('Something went wrong');
            res.send('err');
        }
        else { 
            if (response.statusCode === 200) {
                console.log('@@@@@@@@@', response.statusCode);
                res.send('ok');
            }
            else{
                console.log('@@@@@@@@@', response.statusCode)
                res.send('err2');
            }
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));