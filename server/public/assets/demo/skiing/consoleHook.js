(function () {

	var reportError = function (info) {
		if(info.type == 'WindowError') {
			document.write(info.msg);
		}
	};

	var logHook = console.log;
	console.log = function () {
		reportError({
        	type: 'ConsoleLog',
        	msg: arguments
        });
		logHook.apply(this, arguments);
	};

	var errorHook = console.error;
	console.error = function () {
		reportError({
        	type: 'ConsoleError',
        	msg: arguments
        });
		errorHook.apply(this, arguments);
	};

	window.onerror = function(msg, url, lineNo, columnNo, error) {
		try {
			var string = msg.toLowerCase();
		    var substring = "script error";
		    if (string.indexOf(substring) > -1){
		        console.log('Script Error: See Browser Console for Detail');
		    } else {
		        var message = [
		            'Message: ' + msg,
		            'URL: ' + url,
		            'Line: ' + lineNo,
		            'Column: ' + columnNo,
		            'Error Stack: ' + JSON.stringify(error.stack)
		        ].join(' - ');

		        reportError({
		        	type: 'WindowError',
		        	msg: message
		        });
		    }
		} catch (e) {
			console.log('Error: errorHook error: ', e.stack);
		}

	    return true;
	}
})();
