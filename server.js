const express = require('express');
const path = require("path");
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'client')));

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log('server listening on port ' + port);
});