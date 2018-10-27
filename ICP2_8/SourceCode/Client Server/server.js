var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var request= require('request-json');
var app = express();


var client = request.createClient('http://127.0.0.1:8080/');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getData', function (req, res) {
    var searchKeyword = req.query.searchkey;
    client.get("https://kgsearch.googleapis.com/v1/entities:search?query="+searchKeyword+"&key=AIzaSyCZbMz2VUDfsNIawl7W9W64FpZp8gsoh10&limit=1&indent=True", function (error, response, body) {
        res.send(body);
    });

});

var server = app.listen(8080,function () {
    var host = server.address().address
    console.log("host value"+host);
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
