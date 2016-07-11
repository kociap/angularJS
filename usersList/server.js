var http = require('http');
var fileSystem = require('fs');

http.createServer(function(request, response) {

	if( request.method === 'GET' ) {

		if( request.url === '/' ) {

			fileSystem.readFile('index.html', function( error, file ) {

				response.writeHead(200, {'Content-type': 'text/html'});
				
				response.end(file.toString());

			});

		} else {

			var type = request.url.split('.');

			fileSystem.readFile('.' + request.url, function(error, file) {

				response.writeHead(200, {'Content-type' : 'text/' + type[type.length - 1]});

				try {
					
					response.end(file.toString());

				} catch(e) {

					console.log('Error: Could not read or find file ' + request.url);
					response.end();

				}

			});

		}

	} else if( request.method === 'POST' ) {

		var data = '';

		request.on('data', function(dataPiece) {

			data+= dataPiece;

		});

		request.on('end', function() {

			console.log(data);

			fileSystem.writeFile('.' + request.url, data, function() {

				response.writeHead(200, {'Content-type': 'text/plain'});
				response.end("OK");

			});


		});

	}

}).listen(8080, function() {
	
	console.log('Http-server listening on port 8080.')

});