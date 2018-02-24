// server
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('./models')
mongoose.Promise = global.Promise
const db = mongoose.connection

require('dotenv').config({ silent: true })
const fs = require('fs')
const port = 3500 


const server = require('http').Server(app)
const io = require('socket.io')(server)
const pi = require('./pi/wpi')(io)
const getConfig = require('./pi/getConfig')(io)
const light = require('./pi/light')(io)

app.use(cors())

app.use(express.static('public'))

server.listen(process.env.PORT || port).setMaxListeners(1000)

console.log(`Server started on ${port}`)
