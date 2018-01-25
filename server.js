// server
const express = require('express')
const app = express()
const cors = require('cors')
// const responseTime = require('response-time')
const io = require('socket.io')(server)
const pi = require('./pi/wpi')(io)
require('dotenv').config({ silent: true })
// const gpio = require("pi-gpio")
const fs = require('fs')
const port = 3000

const mongoose = require('./models')
mongoose.Promise = global.Promise
const db = mongoose.connection

// Optional fallthrough error handler
app.use(function onError (err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500
  res.end(res.sentry + '\n')
  if (err) throw err
})

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cors())

app.use(express.static('public'))

server.listen(process.env.PORT || port)

console.log(`Server started on ${port}`)
