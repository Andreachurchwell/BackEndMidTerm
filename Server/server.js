const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()

// i can delete this right? below
const User = require('./model/user.Model')


// it imports my routes
// this is new below
const userRoutes = require('./routes/routes')


const port = process.env.PORT || 5000;


app.use(express.json())   // Gives access to the req.body

app.use(cors())
userRoutes(app)

app.get("/test", (req, res) => {
    console.log("TEST route HIT!!!")
    res.json({ msg: "Hello World!" })
})

// app.post("/create", (req, res) => {
//     console.log("create route HIT!!!", req.body)
//     User.create(req.body)
//         .then(created => {
//             console.log('created', created)
//             // res.json(created)
//         })
// })

// app.get("/getUsers", (req, res) => {
//     console.log('usersFound=')
//     User.find()
//         .then(found => {
//             console.log('found', found)
//             res.json(found)
//         })
// })


// app.delete('/delete/:id', (req, res) => {
//     console.log('req.p', req.params)
//     User.findByIdAndDelete(req.params.id)
//         .then(deleted => {
//             console.log('found', deleted)

//         })
// })






// app.put('/update/:id', (req, res) => {
//     console.log('req.body===', req.body);
//     User.findByIdAndUpdate(req.params.id, req.body)
//         .then(edited => {
//             console.log('edited', edited);
//             res.json(edited);
//         })
//         .catch(err => {
//             console.log('error', err);
//             res.status(400).json({ message: 'Error updating user', error: err });
//         });
// });




app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to Database")
    })
    console.log(`Server is running on port: ${port} `)
})