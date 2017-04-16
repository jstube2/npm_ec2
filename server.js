var http = require('https');
var url = require('url');
var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();

var options = {
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('server.crt'),
};

function start(route, handle) {
  function onRequest(request, response) {
    var loc = url.toString();
    console.log('Server.js URL: ' + loc);
    var pathName = url.parse(request.url).pathname;
    console.log('Request for ' + pathName + ' received.');
    route(handle, pathName, response, request);
  }
  
  var port = 4443;
  http.createServer(options, app).listen(4443);
  console.log('Server has started. Listening on port: ' + port + '...');
}

exports.start = start;
