const express = require('express')

const Users = require('./users-model')
const restricted = require('../auth/restricted')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json("In users-router!")
})

module.exports = router