
const { Pool } = require("pg");

const DBconfig = {
  database: 'bookmyshow',
  user: 'postgres',
  password: '$srpago.123',
  host: 'db'
} 

const pool = new Pool(DBconfig);


module.exports = pool;