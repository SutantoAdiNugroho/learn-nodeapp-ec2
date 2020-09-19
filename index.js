var express = require('express');
 
var app = express();

app.get('/', function (req, res) {
 res.send('hello world');
});

app.listen(3000, () => {
    console.log(`Running on port 3000`);  
})
 
module.exports = app;