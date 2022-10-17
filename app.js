var express = require('express');
var app = express();
const path = require('path');

app.use(express.static('assets'))
app.use(express.static('public'))
app.use(express.static('member'))

app.get('/', function (req, res) {
    var file = path.join(__dirname, '/public/default.html');
    res.sendFile(file);
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});