const express = require('express')

const app = express()

const indexRoutes = require ('./home.routes.js')

app.use('/', indexRoutes)

module.exports = app
