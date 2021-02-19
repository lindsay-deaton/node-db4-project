// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dataBaseName.db3'
    },
    useNullAsDefault: true,
    pool: {
      //whenever you need a foreign key in your migrations, you're going to want this in your knex file.
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

};
