var connect = require('connect'),
	http = require('http'),
	staticDir = 'static',
	server = connect();
server
	.use(connect.static(staticDir))
	.use(connect.directory(staticDir));
http.createServer(server).listen(8080);
console.log('Server started on http://localhost:8080/')