// server
const express = require('express')
const app = express()
const cors = require('cors')
<<<<<<< HEAD
const mongoose = require('./models')
=======

require('dotenv').config({ silent: true })
const fs = require('fs')
const port = 3500

/* const mongoose = require('./models')
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028
mongoose.Promise = global.Promise
const db = mongoose.connection */

<<<<<<< HEAD
require('dotenv').config({ silent: true })
const fs = require('fs')
const port = 3500 

=======
/* // Optional fallthrough error handler
app.use(function onError (err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500
  res.end(res.sentry + '\n')
  if (err) throw err
}) */
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028

const server = require('http').Server(app)
const io = require('socket.io')(server)
const pi = require('./pi/wpi')(io)
<<<<<<< HEAD
const getConfig = require('./pi/getConfig')(io)
const light = require('./pi/light')(io)

=======
>>>>>>> ec4f4bb667bf16b4f36a1fc4358494beb5392028
app.use(cors())

app.use(express.static('public'))

server.listen(process.env.PORT || port).setMaxListeners(1000)

console.log(`Server started on ${port}`)
