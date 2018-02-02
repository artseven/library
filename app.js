var express = require('express');

var app = express();


var port = 5000;
//callback--------|
app.listen(port, function(err) {
    console.log('running server on port ' + port);
})