var credentials = {
  client: {
    id: 'cbf0bfc4-dc48-4f3c-a897-fa983a054150',
    secret: 'wzukaYCbHs8vna4oYhc6Rsz',
  },
  auth: {
    tokenHost: 'https://login.microsoftonline.com',
    authorizePath: 'common/oauth2/v2.0/authorize',
    tokenPath: 'common/oauth2/v2.0/token'
  }
};
var oauth2 = require('simple-oauth2')(credentials);

var redirectUri = 'https://34.205.29.189:80';

// The scopes the app requires
var scopes = [ 'openid',
               'https://outlook.office.com/mail.read' ];
    
function getAuthUrl() {
  var returnVal = oauth2.authorizationCode.authorizeURL({
    redirect_uri: redirectUri,
    scope: scopes.join(' ')
  });
  console.log('Generated auth url: ' + returnVal);
  return returnVal;
}

exports.getAuthUrl = getAuthUrl;
