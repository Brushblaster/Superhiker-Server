

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
}
