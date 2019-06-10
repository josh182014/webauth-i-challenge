const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')
const restricted = require('../auth/restricted')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json("In auth-router!")
})

router.post('/register', (req, res) => {
    Users.add(req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json("server error")
    })
})

module.exports = router