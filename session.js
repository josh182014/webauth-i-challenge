const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

module.exports = sessionConfig = {
    name: "whatever", //default set to sid
    secret: "super secure now",
    resave: "false", //if there are no changes then don't save it
    saveUninitialized: false,  //GDPR compliance
    cookie: {
      maxAge: 1000 * 60 * 10, //miliseconds
      secure: false, //only send over https, set true in production
      httpOnly: true, //always true, means client-side js can't access the cookie
    },
    store: new KnexSessionStore({
      knex: require('./data/dbConfig'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 30,
    })
  }