const express = require('express')

const Users = require('./users-model')
const restricted = require('../auth/restricted')

const router = express.Router()

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json("server error")
    })
})

module.exports = router