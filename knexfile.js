// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'docker',
      port: 5432,
      database: 'learn'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432, 
      database: 'learn',
      user: 'postgres',
      password: 'docker'
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
  }
};
