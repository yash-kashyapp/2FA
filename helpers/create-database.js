const mongoose = require('mongoose');
const util = require('util');

module.exports = ({ config }) => {
  const debug = require('debug')('authservice:index')

  // make bluebird default Promise
  Promise = require('bluebird') // eslint-disable-line no-global-assign

  // plugin bluebird promise in mongoose
  mongoose.Promise = Promise

  // connect to mongo db
  const mongoUri = config.mongo.host

  // mongoose.connect(
  //   mongoUri,
  //   { server: { socketOptions: { keepAlive: 1 } } }
  // )
  mongoose.connect(mongoUri);
  
  // print mongoose logs in dev env
  if (config.mongooseDebug) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
      debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc)
    })
  }

  return mongoose
}
