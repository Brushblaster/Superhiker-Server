// requireing modules
const wpi = require('wiring-pi')
const io = require(socket.io)


exports = module.exports = function (io) {
// init Socket.io
io.sockets.on('connection', function (socket) {

//getting Setup credentials
socket.on('setCredentials', function (data) {
  wpi.setup(data.mode)
}

}
