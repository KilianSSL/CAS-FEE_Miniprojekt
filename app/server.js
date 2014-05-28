var express = require('express');
var app = express();
var server = require('http').createServer(app);

exports = module.exports = server;

exports.use = function() {
    app.use.apply(app, arguments);
};