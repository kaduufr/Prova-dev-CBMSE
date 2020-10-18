require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: "./src/db/agenda.sqlite"
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
    },
    useNullAsDefault: true
  },
  staged: {
    client: 'postgresql',
    connection: {
      database: 'agenda',
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWD
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
