const express = require('express');
const https = require('https');
const request = require('request');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
})

app.post("/", function (req, res) {
    console.log(req.body);
})

app.listen(3000, function () {
    console.log("Server started at 3000");
})