const express = require('express');
const path = require('path');
const config = require('./config/config');
const createDatabase = require('./helpers/create-database');
const createApi = require('./helpers/create-api');
const createViewsSupport = require('./helpers/create-views-support');
const routes = require('./routes');
const winstonInstance = require('./config/winston');
const app = express()

app.use('/partials', express.static(path.join(__dirname, 'views/partials')));

createDatabase({ config })

createViewsSupport(app, path.join(__dirname, 'views'))

createApi(app, config, routes, winstonInstance)

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`)
})
