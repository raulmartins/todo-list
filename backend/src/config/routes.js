const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService.js')
    todoService.register(router, '/todos')
}