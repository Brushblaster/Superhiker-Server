module.exports = function (options) {
const five = require('johnny-five')
// const Raspi = require('raspi-io')
const board = new five.Board()


board.on('ready', function () {
  var stepper = new five.Stepper({
    type: five.Stepper.TYPE.DRIVER,
    stepsPerRev: 1600,
    pins: {
      step: 12,
      dir: 11
    }
  
  })


  
  stepper.rpm(20).ccw().accel(1000).decel(1600).step(options, function () {
      console.log('finished')
  })

  this.on('exit', function () {
    console.log('fifi')
  })
})
}








    /* const board = new five.Board()
    board.on('ready', function () {

      var stepper = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 1600,
        pins: {
          step: 12,
          dir: 11
        }
      });

      // Make 10 full revolutions counter-clockwise at 180 rpm with acceleration and deceleration
      stepper.rpm(20).ccw().accel(1000).decel(1600).step(5000, function () {

        console.log("Done moving CCW");

        // once first movement is done, make 10 revolutions clockwise at previously
        //      defined speed, accel, and decel by passing an object into stepper.step
        stepper.step({
          steps: 2000,
          direction: five.Stepper.DIRECTION.CW
        }, function () {
          console.log("Done moving CW");
        });
      });
    })
  } */


