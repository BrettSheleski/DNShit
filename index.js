var dnsd = require('dnsd');

var server = dnsd.createServer(function(req, res) {
	res.end('63.135.90.70');
});

server.listen(53, '127.0.0.1');
console.log('Server running at 127.0.0.1:53')
