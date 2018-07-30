'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const app = express()
const db = require('../db')


if (process.env.NODE_ENV !== 'production') {
  app.use(require('volleyball'))
}

//The code below works because `.use` returns `this` which is `app`. So what we want to return in the `module.exports` is `app`, and we can chain on that declaration because each method invokation returns `app` after mutating based on the middleware functions
module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'App.js')))

if (module === require.main) {
  const PORT = 1337
  db.sync()
  .then(() => {
    console.log('db is synced AF')
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
  });
}



