// server
const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config({ silent: true })
const fs = require('fs')
const port = 3500

/* const mongoose = require('./models')
mongoose.Promise = global.Promise
const db = mongoose.connection */

/* // Optional fallthrough error handler
app.use(function onError (err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500
  res.end(res.sentry + '\n')
  if (err) throw err
}) */

const server = require('http').Server(app)
const io = require('socket.io')(server)
const pi = require('./pi/wpi')(io)
app.use(cors())

app.use(express.static('public'))

server.listen(process.env.PORT || port)

console.log(`Server started on ${port}`)
