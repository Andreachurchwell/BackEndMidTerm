const User = require('../model/user.Model')




// this below will create a user


const createUser = (req, res) => {
    User.create(req.body)
        .then(created => {
            console.log('USER CREATED', created)
        })
        .catch(err => console.log("ERROR"))
}


// this below will get me all of the users


const getUsers = (req, res) => {
    User.find()
        .then(found => {
            console.log('USER FOUND!', found)
            res.json(found)
        })
        .catch(err => console.log("ERROR IN GETUSERS!!"))

}

// code below will delete a user

const deleteUser = (req, res) => {
    User.findByIdAndDelete('req.params==', req.params)
        .then(deleted => {
            console.log('deleted found', deleted)
            
        })
        .catch(err => console.log('ERROR IN DELETE USER'))
}



// this code below will edit a username

const updateUser = (req, res) => {
    console.log('req.body==', req.body)

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(edited => {
            console.log('EDIT', edited)
            res.json(edited)
        })
        .catch(err => console.log('ERROR IN EDIT'))
}

module.exports = {
    createUser,
    getUsers,
    deleteUser,
    updateUser
}