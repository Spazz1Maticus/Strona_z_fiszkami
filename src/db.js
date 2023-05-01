const Pool = require('pg').Pool;

const pool = new Pool({
    user: "userdb",
    host: "localhost",
    database: "user_db",
    password: "qwe",
    port: 5432,
})

module.exports = pool;