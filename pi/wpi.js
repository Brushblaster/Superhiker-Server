// requireing modules
const wpi = require('wiring-pi')
const io = require(socket.io)
const cableCarRigi = require('./cableCarRigi')
const cableCarPilatus = require('./cableCarPilatus')
const lights = require('./lights')

exports = module.exports = function (io) {
// init Socket.io
io.sockets.on('connection', function (socket) {

//getting Setup credentials
socket.on('setCredentials', function (data) {
  wpi.setup(data.mode)
}

}
