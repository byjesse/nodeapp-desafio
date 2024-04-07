const mysql = require("mysql2/promise");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// Create a pool of connections
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: true, // Whether the pool should wait for connections when all connections are busy
  connectionLimit: 10, // Maximum number of simultaneous connections
  queueLimit: 0, // Maximum number of connection requests the pool will queue before returning an error
});

// Export the pool
module.exports = pool;
