 var express = require('express');
var path = require('path');
var appAPPS = express();
var appCDN = express();
var appRECYCLE = express();
// CDN Server
appCDN.set('port', 8081);
appCDN.use(express.static(path.join(__dirname, '/CDN')));
var server = appCDN.listen(appCDN.get('port'), function() {
  var port = server.address().port;
  console.log('CDN Serving Locally on ' + port);
});

// APPS Server
appAPPS.set('port', 8082);
appAPPS.use(express.static(path.join(__dirname, '/APPS')));
var server = appAPPS.listen(appAPPS.get('port'), function() {
  var port = server.address().port;
  console.log('CDN Serving Locally on ' + port);
});

// Recycle Server
appRECYCLE.set('port', 8083);
appRECYCLE.use(express.static(path.join(__dirname, '/Recycle')));

// Listen for requests
var server = appRECYCLE.listen(appRECYCLE.get('port'), function() {
  var port = server.address().port;
  console.log('CDN Serving Locally on ' + port);
});
