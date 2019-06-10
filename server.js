const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's working! It's working! anakin.gif");
});

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)

module.exports = server;
