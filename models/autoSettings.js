const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Schema = mongoose.Schema

// Create Motion Configuration Schema
const motionSettings = new Schema({
  rigiSpeed: {
    type: Number,
    default: 10,
    required: [true, 'Cable Car Rigi Speed is required']
  },
  rigiAccel: {
    type: Number,
    default: 10,
    required: [true, 'Cable Car Rigi Acceleration is required']
  },
  pilatusSpeed: {
    type: Number,
    default: 10,
    required: [true, 'Cable Car Pilatus Speed is required']
  },
  pilatusAccel: {
    type: Number,
    default: 10,
    required: [true, 'Cable Car Pilatus Acceleration is required']
  },
  rigiTimeout: {
    type: Number,
    default: 5,
    required: [true, 'Cable Car Rigi Timout is required']
  },
  pilatusTimeout: {
    type: Number,
    default: 5,
    required: [true, 'Cable Car Pilatus Timout is required']
  },
  pilatusSteps: {
    type: Number,
    default: 9500,
    required: [true, 'Cable Car Pilatus Steps is required']
  },
  rigiSteps: {
    type: Number,
    default: 10000,
    required: [true, 'Cable Car Rigi Steps is required']
  },
  _id: false
})

const autoSettings = new Schema({
  config: motionSettings,
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const settings = mongoose.model('autoSettings', autoSettings)

module.exports = settings
