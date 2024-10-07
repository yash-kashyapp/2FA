const ApiError = require('./api-error')
const get = require('lodash/get')

module.exports = function(error) {
  throw new ApiError(
    get(error, 'response.data.message', 'Something went wrong'),
    get(error, 'response.status', 500),
    get(error, 'response.data.errors')
  )
}
