var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port);
console.log('Git Lucky is running on port %s', port);

module.exports = app;