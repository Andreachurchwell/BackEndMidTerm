const express = require('express')
const userController = require('../controllers/users.Controller')


module.exports = (app) => {

   

    app.get('/getUsers', userController.getUsers)
    app.post('/create', userController.createUser)
    app.put('/update/:id', userController.updateUser)
    app.delete('/delete/:id', userController.deleteUser)

}

