const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json("In auth-router!")
})

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
    .then(user => {
      req.session.username = user.username
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
        req.session.username = user.username
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'You shall not pass!' });
        }
      })
      .catch(error => {
        res.status(500).json("Server Error");
      });
});

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('Logged out')
})

module.exports = router