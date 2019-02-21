// Update with your config settings.
const pg = require('pg');
pg.defaults.ssl = true;
module.exports = {
  development: {
    // client: 'sqlite3',
    client: 'pg',
    // connection: {
    //   filename: './dev.sqlite3'
    // },
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
