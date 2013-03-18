var connect = require('connect');
var server = connect.createServer(
    connect.static(__dirname + '/site')
).listen(process.env.PORT || 8000);
var webRTC = require('webrtc.io').listen(server);