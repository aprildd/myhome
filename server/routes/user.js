/*
* @file user
* @author chang_f
* @date   2017-07-24 15:07:58
* @Last Modified by:   chang_f
* @Last Modified time: 2017-07-24 18:13:46
*/

'use strict';

var express = require('express');
var router = express.Router();

var dbPool = require('../common/dbPool');

var findDocuments = function(client, callback) {
  // Get the documents collection
  var collection = client.collection('users');
  // Find some documents
  	collection.find().toArray(function(err, docs) {
	    console.log("Found the following records");
	  	console.dir(docs);
	  	callback(docs);
	});
}

router.get('/:reigster', function(req, res) {
  //res.send('user router reigster');
	const resourcePromise = dbPool.acquire()
	resourcePromise.then(function(client) {
	    findDocuments(client, function (data) {
	    	console.log('data = ', data);
	    	res.send(JSON.stringify(data));
	    	dbPool.release(client);
	    });
	})
	.catch(function(err){
		console.log('Error: ', err);
	});
});

module.exports = router;