const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')
const restricted = require('../auth/restricted')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json("In auth-router!")
})

router.get('/login', (req, res) => {
    res.status(200).json("Login")
})

router.get('/register', (req, res) => {
    res.status(200).json("Register")
})

module.exports = router