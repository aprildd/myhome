/*
* @file index
* @author chang_f
* @date   2017-07-24 15:07:27
* @Last Modified by:   chang_f
* @Last Modified time: 2017-07-24 16:02:28
*/

'use strict';

var express = require('express');
var router = express.Router();

router.get('/*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router;