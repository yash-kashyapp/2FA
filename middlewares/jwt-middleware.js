//const { expressjwt: jwt } = require("express-jwt"); this is used for the version of "express-jwt": "^7.4.3" in package.json & an return value is in req.auth
const jwt = require("express-jwt"); //this is used for the version of "express-jwt": "^6.1.1" in package.json & an return value is in req.user
const config = require("./../config/config");

// Error: secret should be set - config.js check and check the .env path
module.exports = jwt({ secret: config.jwtSecret, algorithms: ["HS256"] });
