'use strict';

var express = require('express'),
	path = require("path");

var app = express();

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, "public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function (req, res) {
	res.send('Hello World from the demo project');
});

app.listen(8080, 'localhost');