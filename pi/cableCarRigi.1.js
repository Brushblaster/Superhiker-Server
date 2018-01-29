
const wpi = require('wiringpi-node')
const fs = require('fs')
wpi.setup('gpio')

// Driving Motor

module.exports = {
  driveMotor: function (right, steps, acc, start, pin) {
    wpi.pinMode(pin, wpi.OUTPUT)  // PUL pos
    wpi.pinMode(27, wpi.OUTPUT)   // DIR pos
    wpi.pinMode(22, wpi.OUTPUT)   // PUL neg
     
    wpi.pinMode(10, wpi.OUTPUT)   // DIR neg
    wpi.pinMode(9, wpi.OUTPUT)    // ENA neg  
    wpi.pinMode(11, wpi.OUTPUT)   // ENA pos
    
    wpi.digitalWrite(22, 0)       // set PUL neg to ground
    wpi.digitalWrite(10, 0)       // set DIR neg to ground
    wpi.digitalWrite(9, 0)        // set ENA neg to ground
    wpi.digitalWrite(11, 0)       // set ENA pos to ground
   

    console.log('firing')
    
    if (right) {
      wpi.digitalWrite(27, 1)
      console.log('turnin right')
      for (let stepCount = 0; stepCount < steps; stepCount++) {
        wpi.digitalWrite(pin, 1)
        wpi.delayMicroseconds(acc)
        wpi.digitalWrite(pin, 0)
      }
    } else {
      wpi.digitalWrite(27, 0)
      console.log('turnin left')
      for (let stepCount = 0; stepCount < steps; stepCount++) {
        wpi.digitalWrite(pin, 1)
        wpi.delayMicroseconds(acc)
        wpi.digitalWrite(pin, 0)
      }
    }
},
  moveToStep: function (steps, acceleration, pin) {


    let stepCounter = 0

    
    let delays = [steps]
    let angle = 1
    let accel = 0.01
    let c0 = 2000 * Math.sqrt( 2 * angle / accel ) * 0.67703
    let lastDelay = 0
    let highSpeed = 100

    for (let i = 0; i < steps; i++ ) {
      let d = c0
      if ( i > 0 ) {
      d = lastDelay - ( 2 * lastDelay) / (4 * i + 1)
      }
      if ( d < highSpeed) {
        d = highSpeed
      }
      delays[i] = parseInt(d)
      lastDelay = d
      
    }


    //console.log(delays)
    for ( let i = 0; i < steps; i++)  {
      wpi.digitalWrite(27, 1)
      wpi.digitalWrite(pin, 1)
      wpi.delayMicroseconds(delays[i])
      wpi.digitalWrite(pin, 0)
    }

    for (let i = 0; i < steps; i++) {
      wpi.digitalWrite(27, 0)
      wpi.digitalWrite(pin, 1)
      wpi.delayMicroseconds(delays[i])
      wpi.digitalWrite(pin, 0)
    }

      // console.log(Math.round(interstepDelay))
  },
  stop: function () {
    wpi.pinMode(9, wpi.OUTPUT)    // ENA neg  
    wpi.pinMode(11, wpi.OUTPUT)   // ENA pos

    wpi.digitalWrite(11, 1)
  },
  resetStop: function () {
    wpi.pinMode(9, wpi.OUTPUT)    // ENA neg  
    wpi.pinMode(11, wpi.OUTPUT)   // ENA pos

    wpi.digitalWrite(11, 0)
  }
}
