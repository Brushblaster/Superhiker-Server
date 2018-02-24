const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = require('../config/dbConfig')
const settings = require('./autoSettings')
// const Output = require('./output')

mongoose.connect(config.dbAddress, {
  useMongoClient: true
})
  .catch(error => console.log(error))

module.exports = {
  settings: settings,
}
