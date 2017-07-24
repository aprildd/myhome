/*
* @file build
* @author chang_f
* @date   2017-07-24 15:20:10
* @Last Modified by:   chang_f
* @Last Modified time: 2017-07-24 15:43:51
*/

'use strict';

var fs = require('fs');
var exec = require('child_process').exec;
var archiver = require('archiver');
var unzip = require("unzip");

var targetDir = './dist';

function copy(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
};
/*
exec('ng build --prod', function (err, stdout, stderr) {
	if(err) {
        console.error('build error:' + stderr);
    } else {
        console.log(stdout);
    }

    if (!fs.existsSync(targetDir)) {
    	console.log('publish error!');
	    return;
	}

	var output = fs.createWriteStream('dist.zip');
	var archive = archiver('zip');

	archive.on('error', function (err) {
		console.error('zip error: ', err);
	});

	archive.pipe(output);

	archive.directory('./dist', true);

	archive.finalize();

	fs.renameSync('./dist.zip', './server/view/dist.zip');

	fs.createReadStream('archiver-unzip.zip').pipe(
		unzip.Extract({
			path: './server/view'
	}));
});
*/
var output = fs.createWriteStream('dist.zip');
	var archive = archiver('zip');

	archive.on('error', function (err) {
		console.error('zip error: ', err);
	});

	archive.pipe(output);

	archive.directory('./dist', true);

	archive.finalize();

	fs.renameSync('./dist.zip', './server/view/dist.zip');

	fs.createReadStream('archiver-unzip.zip').pipe(
		unzip.Extract({
			path: './server/view'
	}));
