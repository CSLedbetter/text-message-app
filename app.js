const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Twilio = require('twilio');
const myPhoneNumber = 'process.env.TWILIO_PHONE';
const accountSid = 'process.env.TWILIO_ACCOUNT_SID'; 
const authToken = 'process.env.TWILIO_AUTH_TOKEN'; 
var twilioClient = new Twilio(accountSid, authToken);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/sendMessage', (req, res) => {
    const message = `Hello there you handsome man!
        REPLY YES or NO if you agree
    `

    twilioClient
        .messages
        .create({
            body: message,
            to: myPhoneNumber, 
            from: '+18582511072' 
        })
        .then(function(message) {
            res.send('ok');
        });
});

app.post('/twilioReply', (req, res) => {
    const json = JSON.stringify(req.body, null, 2);
    console.log(json);

    twilioClient
        .messages
        .create({
            body: req.body.body,
            to: myPhoneNumber, 
            from: '+18582511072' 
        })
        .then(function(message) {
            res.send('ok');
        });
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});