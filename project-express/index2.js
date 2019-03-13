
var express = require('express');
var app = express();

var helloWorld = require('./hello_world2');//importanto o index2.js 
app.get('/', helloWorld);
app.get('/greet', (Request, Response)=>{
    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

