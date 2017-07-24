/*
* @file myhome
* @author chang_f
* @date   2017-07-24 15:03:34
* @Last Modified by:   chang_f
* @Last Modified time: 2017-07-24 16:02:50
*/

'use strict';

var express = require('express');
var request = require('request');

var app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

app.use(express.static('public'));

app.use('/user', userRouter);

//放在最后
app.use('/*', indexRouter);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
