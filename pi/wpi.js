'strict'
// requireing modules
const five = require('johnny-five')
const raspiConfig = require('../config/raspiConfig')
const arduinoConfig = require('../config/arduinoConfig')
<<<<<<< HEAD
const db = require('../models')
=======
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028


exports = module.exports = function (io) {
  // init Socket.io
  io.sockets.on('connection', function (socket) {
    // init johnny-five board
<<<<<<< HEAD
    
    let autoStop = false
    
=======
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028
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
      
    
<<<<<<< HEAD
      // when connection established to front end dispatch
      console.log('frontend has connected')

      // Drive Rigi up
      socket.on('driveStepsRigiUp', function (data) {
        console.log('Driving Rigi Up')
        cableCarRigiStepper.rpm(data.speed)
          .ccw()
          .accel(data.accel)
          .decel(data.accel)
          .step(data.steps, function () {
            console.log('Drived Rigi Up')
          })
      })
    
      // Drive Rigi Down
      socket.on('driveStepsRigiDown', function (data) {
        console.log('Driving Rigi Down')
        cableCarRigiStepper.rpm(data.speed)
          .cw()
          .accel(data.accel)
          .decel(data.accel)
          .step(data.steps, function () {
            console.log('Drived Rigi Down')
          })
      })

      // Drive Pilatus up
      socket.on('driveStepsPilatusUp', function (data) {
        console.log('Driving Pilatus Up')
        console.log(data)
        cableCarPilatus.rpm(data.speed)
          .ccw()
          .accel(data.accel)
          .decel(data.accel)
          .step(data.steps, function () {
            console.log('Drived Pilatus Up')
          })
      })

      // Drive Pilatus down
      socket.on('driveStepsPilatusDown', function (data) {
        console.log('Driving Pilatus down')
        console.log(data)
        cableCarPilatus.rpm(data.speed)
          .cw()
          .accel(data.accel)
          .decel(data.accel)
          .step(data.steps, function () {
            console.log('Drived Pilatus Down')
          })
      })

      // drive to specific step
      socket.on('driveToStep', function (data) {
        console.log('driveStepsLeft...recieved: ' + data)
        cableCarRigi.moveToStep(data.steps, data.acc, 17)
      })

      // stop Movement
      socket.on('E-stop', function () {
        console.log('stoping Drive...')
        cableCarPilatusEna.on()
        cableCarRigiEna.on()
      })

      // reset stop event
      socket.on('resetStop', function () {
        console.log('resetting Drive...')
        cableCarPilatusEna.off()
        cableCarRigiEna.off()
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
        let trigger = false
        
        let config = {}

        autoStop = false

        db.settings
          .find({ config: 1 }).limit(1)
          .where('config').ne(null)
          .sort('-createdOn')
          .then(settings => {
            
            config = settings[0].config
            console.log('Auto started')
            forwardRigi(cableCarRigiStepper, config)
            forwardPilatus(cableCarPilatus, config)
          })
          .catch(error => console.log(error))
        

        console.log(config)


        // driving Rigi in Automode

        function forwardRigi (cableCarRigiStepper, config) {
          cableCarRigiStepper.rpm(config.rigiSpeed)
            .ccw()
            .accel(config.rigiAccel)
            .decel(config.rigiAccel)
            .step(config.rigiSteps, function (n) {
              setTimeout(function () {
                backwardRigi(cableCarRigiStepper, config)
              }, config.rigiTimeout)
            })
          }

        function backwardRigi (cableCarRigiStepper, config) {
          cableCarRigiStepper.rpm(config.rigiSpeed)
            .cw()
            .accel(config.rigiAccel)
            .decel(config.rigiAccel)
            .step(config.rigiSteps, function (n) {
              if (!autoStop) {
                setTimeout(function () {
                  forwardRigi(cableCarRigiStepper, config)
                }, config.rigiTimeout)
              }
            })
        }

        // Driving Pilatus in Automode

        function forwardPilatus(cableCarPilatus, config) {
          cableCarPilatus.rpm(config.pilatusSpeed)
            .ccw()
            .accel(config.pilatusAccel)
            .decel(config.pilatusAccel)
            .step(config.pilatusSteps, function (n) {
              setTimeout(function () {
                backwardPilatus(cableCarPilatus, config)
              }, config.pilatusTimeout)
            })
        }

        function backwardPilatus(cableCarPilatus, config) {
          cableCarPilatus.rpm(config.pilatusSpeed)
            .cw()
            .accel(config.pilatusAccel)
            .decel(config.pilatusAccel)
            .step(config.pilatusSteps, function (n) {
              if (!autoStop) {
                setTimeout(function () {
                  forwardPilatus(cableCarPilatus, config)
                }, config.pilatusTimeout)
              }
            })
        }
      })

      // Stop Automatic Mode

      socket.on('driveAutoStop', function () {
        autoStop = true
      })
    })
  }).setMaxListeners(0)
=======
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
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028
}
