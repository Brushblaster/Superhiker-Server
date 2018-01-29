const wpi = require('wiring-pi')

wpi.setup('wpi')

// Driving Motor

module.exports = {
  driveMotor: function (speed, steps, acc, start, pin) {

    wpi.pinMode(pin, wpi.OUTPUT)

    let timeout = 1200

    for (let stepCount = 0; stepCount < steps; i++) {
      wpi.digitalWrite(1)
      wpi.delayMicroseconds(timeout)
      wpi.digitalWrite(0)
    }
  }/* ,


  setDirection: function (left, right, pin) {
    const direction = gpio.GPIO

    let cableCarDirection = new GPIO(pin)
    cableCarDirection.open()
    cableCarDirection.setMode(gpio.OUT)
    if (left && !right) {
      cableCarDirection.wirte(gpio.HIGH)
    } else {
      cableCarDirection.write(gpio.LOW)
    }
  },

  setEnable: function (ena, pin) {
    const enable = gpio.GPIO

    let cableCarEna = new GPIO(pin)
    cableCarEna.open()
    cableCarEna.setMode(gpio.OUT)
    
    if (!ena) {
      cableCarEna.write(gpio.HIGH)
    }
  } */
}
