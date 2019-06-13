const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const server = express();
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const somethingRouter = require('./something/something-router')
const restricted = require('./auth/restricted')
const sessionConfig = require('./session')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.get('/', (req, res) => {
  res.send("It's working! It's working! anakin.gif");
});

server.use('/api/', authRouter)
server.use('/api/restricted', restricted)
server.use('/api/restricted/users', usersRouter)
server.use('/api/restricted/something', somethingRouter)

module.exports = server;