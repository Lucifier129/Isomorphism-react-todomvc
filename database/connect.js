var todosStore = require('./todos-store')
var socketIO = require('socket.io')

module.exports = function(server) {
	var io = socketIO(server)
	todosStore.io = io
}