'use strict';

var express = require('express'),
	path = require("path");

var app = express();

app.configure(function () {
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, "demo-public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/hello', function (req, res) {
	res.send('Hello World from the angular-extensions demo project');
});

app.listen(8080, 'localhost');