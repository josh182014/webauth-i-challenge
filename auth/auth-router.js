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

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findByUsername({ username })
      .first()
      .then(user => {
        if (user) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Incorrect Username or Password :/' });
        }
      })
      .catch(error => {
        res.status(500).json("Server Error");
      });
  });

module.exports = router