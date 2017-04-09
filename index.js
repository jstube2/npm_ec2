var server = require('./server');
var router = require('./router');
var outlook = require('node-outlook');

var handle = {};
handle['/'] = home;
handle['/authorize'] = authorize;

server.start(router.route, handle);

function home(response, request) {
  console.log('Request handler \'home\' was called.');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<p>Please <a href="' + authHelper.getAuthUrl() + '">sign in</a> with your Office 365 or Outlook.com account.</p>');
  response.end();
}

var url = require('url');
function authorize(response, request) {
  console.log('Request handler \'authorize\' was called.');
  
  // The authorization code is passed as a query parameter
  var url_parts = url.parse(request.url, true);
  var code = url_parts.query.code;
  console.log('Code: ' + code);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<p>Received auth code: ' + code + '</p>');
  response.end();
}
