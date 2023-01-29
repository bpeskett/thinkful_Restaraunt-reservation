/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://honzthlc:g7C-NWrp-JQOMy4auo4E5mKnyyOA_zaz@salt.db.elephantsql.com/honzthlc",
  DATABASE_URL_DEVELOPMENT = "postgres://yzgzcaos:eafrOTIklGC-osJCBgevvURLBemwBN7O@salt.db.elephantsql.com/yzgzcaos",
  DATABASE_URL_TEST = "postgres://pfzsjeyh:rKlomAZhexTfJRzagcan2Otumu8uKsdy@salt.db.elephantsql.com/pfzsjeyh",
  DATABASE_URL_PREVIEW = "postgres://yyitgmaa:Osa2XaD8SjIY9tziZbV-wBi2ThkPTL4F@salt.db.elephantsql.com/yyitgmaa",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};