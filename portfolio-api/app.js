const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
        next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: running')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    //sendGrid.setApiKey('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');
    
    const msg = {
        to: 'joweltisso@gmail.com',
        from: req.body.email,
        subject: 'Testing Portfolio email sent subject',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
                console.log(result);
            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');