<<<<<<< HEAD


// Switching lights and Smoke

exports = module.exports = function (io) {

  const wpi = require('wiringpi-node')
  const config = require('../config/raspiConfig')
  wpi.setup('gpio')

  let themeLightOn = false
  let underfloorLightOn = false
  let topLightOn = false
  let strobeLightOn = false

  wpi.pinMode(config.smokeRelay, wpi.OUTPUT)
  wpi.pinMode(config.themeLight, wpi.OUTPUT)
  wpi.pinMode(config.topLight, wpi.OUTPUT)
  wpi.pinMode(config.strobeLight, wpi.OUTPUT)
  wpi.pinMode(config.underfloorLight, wpi.OUTPUT)

  io.sockets.on('connection', function (socket) {
    // triggering underfloor Light
    socket.on('trigUnderfloorLight', function () {
      
      if (underfloorLightOn) {
        setUnderfloorOff()
      } else if (!underfloorLightOn) {
        setUnderfloorOn()
      }

      function setUnderfloorOn() {
        wpi.digitalWrite(config.underfloorLight, 1)
        underfloorLightOn = true
      }

      function setUnderfloorOff() {
        wpi.digitalWrite(config.underfloorLight, 0)
        underfloorLightOn = false
      }

      io.sockets.emit('trigUnderfloorLight_res')
    })

    // triggering Top light
    socket.on('trigTopLight', function () {

      if (topLightOn) {
        setTopLightOff()
      } else if (!topLightOn) {
        setTopLightOn()
      }

      function setTopLightOn() {
        wpi.digitalWrite(config.topLight, 1)
        topLightOn = true
      }
      
      function setTopLightOff() {
        wpi.digitalWrite(config.topLight, 0)
        topLightOn = false
      }
      io.sockets.emit('trigTopLight_res')
    })

    // triggering Theme Light
    socket.on('trigThemeLight', function () {
      if (themeLightOn) {
        setThemeLightOff()
      } else if (!themeLightOn) {
        setThemeLightOn()
      }

      function setThemeLightOn() {
        wpi.digitalWrite(config.themeLight, 1)
        themeLightOn = true
      }

      function setThemeLightOff() {
        wpi.digitalWrite(config.themeLight, 0)
        themeLightOn = false
      }
      io.sockets.emit('trigThemeLight_res')
    })

    // triggering Strobe Light
    socket.on('trigStrobeLight', function () {
      if (strobeLightOn) {
        setStrobeLightOff()
      } else if (!strobeLightOn) {
        setStrobeLightOn()
      }

      function setStrobeLightOn() {
        wpi.digitalWrite(config.strobeLight, 1)
        strobeLightOn = true
      }

      function setStrobeLightOff() {
        wpi.digitalWrite(config.strobeLight, 0)
        strobeLightOn = false
      }
      io.sockets.emit('trigStrobeLight_res')
    })

    // triggering Smoke
    socket.on('trigSmoke', function () {
      io.sockets.emit('trigSmokeBlock')
      let helper = false
      
      function smokeOn () {
        wpi.digitalWrite(config.smokeRelay, 0)
      }

      function smokeOff () {
        wpi.digitalWrite(config.smokeRelay, 1)
      }
            
      smokeOn()

      setTimeout(function () {
        res()
        smokeOff()
      }, 1500)
      function res () {
        io.sockets.emit('trigSmoke_res')
        helper = false
      }
    })
  }).setMaxListeners(0)
=======
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
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028
}
