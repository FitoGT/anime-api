const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/anime/:anime/:page',function (req, res) {
    
    var apiURL =  `https://api.jikan.moe/v3/search/anime?q=${req.params.anime}&page=${req.params.page}`;

    var request = require('request');
    request(apiURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
       res.send(body);
    }
  }) 
});
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});