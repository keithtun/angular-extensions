'use strict';

var express = require('express'),
	path = require("path"),
	swig = require("swig");

var app = express();

app.configure(function () {
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');	
	app.set('views', __dirname + '/demo-views');
	app.get('/', function (req, res) {
	  res.render('index', { templateContent: 'Hello World' });
	});
	app.use(express.static(path.join(__dirname, "demo-public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/hello', function (req, res) {
	res.send('Hello World from the angular-extensions demo project');
});

app.listen(8080, 'localhost');