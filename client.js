var http = require('http');
var net = require('net');
var fs = require('fs');

var writeStream = fs.createWriteStream('client-file.csv');
var client = net.connect({port: 8000, host: 'localhost'});

client.on('data', function(data){ 
	writeStream.write(data); 
});

client.on('close', function(){
	console.log('Connection closed.');
});



