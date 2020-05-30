const express = require('express')
const bodyParser = require("body-parser");
const multer = require("multer");
require('dotenv').config()
const app = express();
const db = require('./db');
const port = 3001
const path = require("path");


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello I am your backend'))


db.connect().then(dbo => {
    app.get('/image-upload', (req, res) => {
        dbo.collection('images').insertOne({test: 'is connected'})
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
