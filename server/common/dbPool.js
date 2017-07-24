/*
* @file dbPool
* @author chang_f
* @date   2017-07-24 16:23:55
* @Last Modified by:   chang_f
* @Last Modified time: 2017-07-24 18:13:58
*/

'use strict';

var genericPool = require('generic-pool');
var MongoClient = require('mongodb').MongoClient;

var dbConfig = require('../config/config.js').DB;

var factory = {
    create: function(){
         return new Promise(function(resolve, reject) {
         	console.log('========new Promise=======');
         	MongoClient.connect('mongodb://' + dbConfig.IP + ':' + dbConfig.PORT + '/myhome', function(err, db) {
         		if(err) {
         			reject(new Error("connect to mongodb error: ", err));
         			return;
         		}

         		console.log('connect mongodb ok!');
				resolve(db);
			});
        });
    },
    destroy: function(client){
        return new Promise(function(resolve){
          client.on('end', function(){
            resolve()
          });
          client.close();
        });
    }
}

var opts = {
    max: 10, // maximum size of the pool
    min: 2 // minimum size of the pool
};

var mongoPool = genericPool.createPool(factory, opts);

module.exports = mongoPool;