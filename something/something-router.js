const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json("'Got' Inside something-router.js")
})

router.post('/', (req, res) => {
    res.status(200).json("'Posted' inside something-router.js")
})

module.exports = router