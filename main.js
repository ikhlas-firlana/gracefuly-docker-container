
console.log('STARTING')

process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
  console.log('Timeout in 5 sec.');
  setTimeout(() => {
  	console.log('shutdown..');
  	process.exit(1);
  }, 5000);
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);

// sample to container keep running
var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(1337, '0.0.0.0');
