const express = require('express'),
server = express(),
port = process.env.PORT || 3000
mongoose = require('mongoose')
Task = require('./api/models/todoListModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const routes = require('./api/routes/todoListRoutes')
routes(server)

server.listen(port)

  server.use((req, res) => {
    res.status(404).send({ url: req.originalURL })
  })

console.log('API started on port: ' + port)