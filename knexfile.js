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
    connection:
      'postgres://fyocylskzbkjvk:502eb472b4a15bd0f9dff65aaddc5c5e5a2c61217229d8bd22858f1bb8ca65ae@ec2-54-83-44-4.compute-1.amazonaws.com:5432/derde4t91ehk19',
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
