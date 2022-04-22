const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

const responses = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    // for (r in responses) {
    //     console.log(r);
    // }
});
var searchTerm = '';
app.post("/", function (req, res) {
    searchTerm = req.body.cityName;
    const weatherAppId = "607315cc92db1d3d539d20a308842c41";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=" + unit + "&q=" + searchTerm + "&appid=" + weatherAppId;


    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const description = weatherData.weather[0].description;
            const temp = weatherData.main.temp;

            const imgIcon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + imgIcon + "@4x.png";
            res.write("<h1>The Temprature in " + searchTerm + " is " + temp + " degree celsius.</h1>")
            res.write("<p>The Weather is currently  " + description + "</p>");
            res.write("<img src=" + imgUrl + ">");
            res.send();
        })
    });
});

app.listen(3000, function () {
    console.log('Server is running on 3000')
})