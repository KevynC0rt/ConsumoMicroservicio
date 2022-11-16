var createError=require('http-errors');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clienteRouter = require('./routes/cliente');
var servicioRouter = require('./routes/servicio');
var paqueteRouter = require('./routes/paquete');

var app = express();
var app = express();
var MongoServer = require("./config/db");
MongoServer();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cliente', clienteRouter);
app.use('/servicio', servicioRouter);
app.use('/paquete', paqueteRouter);

module.exports = app;
