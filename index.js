const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/crud')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const userModel = mongoose.model("users", UserSchema)

app.get("/getUsers", (req, res) => {
    userModel.find({}).then(function(users) {
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
});

app.listen(3001, () => {
    console.log("Server is running")
});