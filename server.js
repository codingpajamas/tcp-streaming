console.time('readstreamtask');
var net = require('net');
var fs = require('fs');
var readStream = fs.createReadStream('file.csv');  

net.createServer(function(socket){

	readStream.on('readable', function(){   
		var chunk = readStream.read();  
		socket.write(chunk);
	});    

	socket.on('end', function(){
		socket.write("Goodbye");
	});

}).listen(8000, 'localhost');