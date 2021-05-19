
const { Pool } = require("pg");

const DBconfig = {
  database: 'bookmyshow',
  //"user": {"ENV": "PRODUCTION_USERNAME"},
  //"password": {"ENV": "PRODUCTION_PASSWORD"}
  user: 'postgres',
  password: '',
  host: 'localhost'
} 

const pool = new Pool(DBconfig);


module.exports = pool;