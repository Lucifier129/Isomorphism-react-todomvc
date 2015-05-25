import todosStore from './todos-store'
import socketIO from 'socket.io'

export default (server) => {
    let io = socketIO(server)
	todosStore.io = io
}