'strict'
// requireing modules
const five = require('johnny-five')
const raspiConfig = require('../config/raspiConfig')
const arduinoConfig = require('../config/arduinoConfig')
const Raspi = require('raspi-io')


// Driving Motor

exports = module.exports = function (io) {
// init Socket.io
  io.sockets.on('connection', function (socket) {
    // init johnny-five board
    const board = new five.Board()
    board.on('ready', function () {
      var channel1 = new five.Led(raspiConfig.pinChannel1)
      var channel2 = new five.Led(raspiConfig.pinChannel2)
      var channel3 = new five.Led(raspiConfig.pinChannel3)
      var channel4 = new five.Led(raspiConfig.pinChannel4)
      var channel5 = new five.Led(raspiConfig.pinChannel5)
      var channel6 = new five.Led(raspiConfig.pinChannel6)
      var channel7 = new five.Led(raspiConfig.pinChannel7)
      var channel8 = new five.Led(raspiConfig.pinChannel8)

    // drive motor in x steps to the right
    socket.on('channel1', function (data) {
      cahnnel1.rpm(data.speed)
        .ccw()
        .accel(data.accel)
        .decel(data.accel)
        .step(data.steps, function () {
          console.log('finished')
        })
    })
    
        // stop Movement
    socket.on('stop', function () {
      console.log('stoping Drive...')
      cableCarPilatusEna.off()
      cableCarRigiEna.off()
    })

    
    })
  })
}
