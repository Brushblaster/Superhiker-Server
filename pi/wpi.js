'strict'
// requireing modules
const five = require('johnny-five')
const raspiConfig = require('../config/raspiConfig')
const arduinoConfig = require('../config/arduinoConfig')


exports = module.exports = function (io) {
  // init Socket.io
  io.sockets.on('connection', function (socket) {
    // init johnny-five board
    const board = new five.Board()
    board.on('ready', function () {
      var cableCarRigiStepper = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 1600,
        pins: {
          step: arduinoConfig.cableCarRigiPul,
          dir: arduinoConfig.cableCarRigiDir
        }
      })
      var cableCarPilatus = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 1600,
        pins: {
          step: arduinoConfig.cableCarPilatusPul,
          dir: arduinoConfig.cableCarPilatusDir
        }
      })
      var cableCarRigiEna = new five.Led(arduinoConfig.cableCarRigiEna)
      var cableCarPilatusEna = new five.Led(arduinoConfig.cableCarPilatusEna)
      
    
    // when connection established to front end dispatch
    console.log('frontend has connected')

    // drive motor in x steps to the right
    socket.on('driveStepsRight', function (data) {
      console.log('driveStepsRight...recieved: ' + data.steps)
      cableCarRigiStepper.rpm(data.speed)
        .ccw()
        .accel(data.accel)
        .decel(data.accel)
        .step(data.steps, function () {
          console.log('finished')
        })
    })
    
    // rotate motor in x steps to the left
    socket.on('driveStepsLeft', function (data) {
      console.log('driveStepsLeft...recieved: ' + data.steps)
      cableCarRigiStepper.rpm(data.speed)
        .cw()
        .accel(data.accel)
        .decel(data.accel)
        .step(data.steps, function () {
          console.log('finished')
        })
    })

    // drive to specific step
    socket.on('driveToStep', function (data) {
      console.log('driveStepsLeft...recieved: ' + data)
      cableCarRigi.moveToStep(data.steps, data.acc, 17)
    })

    // stop Movement
    socket.on('stop', function () {
      console.log('stoping Drive...')
      cableCarPilatusEna.off()
      cableCarRigiEna.off()
    })

    // reset stop event
    socket.on('resetStop', function () {
      console.log('resetting Drive...')
      cableCarPilatusEna.on()
      cableCarRigiEna.on()
    })

    // Move to Step
    socket.on('moveToStep', function (data) {
      cableCarRigiStepper.rpm(180)
      .ccw()
      .accel(1000)
      .decel(1600)
      .step(data.toStep, function () {
        console.log('finished')
      })
    })
    
    // Drive in Automatic mode
    socket.on('driveAutoStart', function () {
      cableCarRigiStepper.rpm(data.speed)
        .cw()
        .accel(data.accel)
        .decel(data.accel)
        .step(data.steps, function (data) {
          cableCarRigiStepper.rpm(data.speed)
            .ccw()
            .accel(data.accel)
            .decel(data.accel)
            .step(data.steps, function () {
            })
        })

      cableCarPilatusStepper.rpm(data.speed)
        .cw()
        .accel(data.accel)
        .decel(data.accel)
        .step(data.steps, function (data) {
          cableCarPilatusStepper.rpm(data.speed)
            .ccw()
            .accel(data.accel)
            .decel(data.accel)
            .step(data.steps, function () {
            })
        })
    })
  })
  })
}
