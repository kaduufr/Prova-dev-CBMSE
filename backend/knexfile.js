// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'agenda',
      user:     'postgres',
      password: 'postgres'
      // user:     process.env.DB_USER,
      // password: process.env.DB_PASSWD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations'
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: './src/db/seeds'
    }
  },

};
