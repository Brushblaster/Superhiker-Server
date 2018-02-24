// requireing Database
const db = require('../models')

exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    // Set autoSettings into the Database
    socket.on('setAutoSettings', function (motionSettings) {
      /* console.log('getAutoSettings', motionSettings) */
      db.settings.create(motionSettings)
        .then(io.sockets.emit('getLastAutoSettings_res', motionSettings))
        .catch(error => console.log('Model Error: ', error))
    })

    // get Last autoSettings out of the Database
    socket.on('getLastAutoSettings', function (data) {
      db.settings
        .find({ config: 1 }).limit(1)
        .where('config').ne(null)
        .sort('-createdOn')
        .then(settings => {
          io.sockets.emit('getLastAutoSettings_res', settings[0])
        })
        .catch(error => console.log(error))
    })
  })
}
