const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const restricted = require('./auth/restricted')

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's working! It's working! anakin.gif");
});

server.use('/api/', authRouter)
server.use('/api/restricted', restricted)
server.use('/api/restricted/users', usersRouter)

module.exports = server;
