
var express = require('express');
var app = express();

var DeadSimpleAPI = require('dead-simple-api-engine');
var dsapi = new DeadSimpleAPI(app, {
	basepath : __dirname+'/api/', // Tell DSAPI where the API folder is located
	hooks : {
		before : function(req, res) {
			console.log("I get fired before each event");
		},
		after : function(json) {
			// Example on how to wrap all responses
			// var response = { time : new Date(),response : json };
			// return response;
			json.injected = true;
			return json;
		},

	}
}).scheduler.start(); // remove scheduler.start if you don't need scheduling.


var server = app.listen(3100, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Dead Simple API is now ALIVE! Listening over at: http://%s:%s', host, port);
});
