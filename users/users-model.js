const db = require('../data/dbConfig')

module.exports = {
    find,
    add,
    findById,
    findByUsername,
}

function find() {
    return db('users')
}

function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
      });
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
}

function findByUsername(username) {
    return db('users')
    .where(username)
    .first();
}