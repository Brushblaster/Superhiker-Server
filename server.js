// server
const spdy = require('spdy')
const express = require('express')
const app = express()
// const responseTime = require('response-time')
const io = require('socket.io')
require('dotenv').config({ silent: true })
// const gpio = require("pi-gpio")
const fs = require('fs')
process.env.PORT = 3000

/* gpio.open(12, "output", function (err) {		// Open pin 16 for output
  gpio.write(12, 1, function () {			// Set pin 16 high (1)
    gpio.close(12);						// Close pin 16
  })
}) */

/* app.get('/', function (req, res) {
  gpio.open(12, "output", function (err) {		// Open pin 16 for output
    if (err) throw err
    gpio.write(12, 1, function () {			// Set pin 16 high (1)
      gpio.close(12);						// Close pin 16
    })
  })
}) */

const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}

spdy
  .createServer(options, app)
  .listen(3000, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + 3000 + '...')
    }
  })
