const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Hello, world!");
	}
	if (req.url === "/secret") {
		res.end("Hello, Programmer!");
	}
	console.log(req.url);
});
//create a application which is server

server.listen(1112, () => {
	console.log("Server is running on port 1111");
});
//server is ready to listen on the port
//because of the same computer we dont have to domain mapping
//We create a wrapper around a http
//Express is a wrapper around node js
//When we are making nodejs
//We
