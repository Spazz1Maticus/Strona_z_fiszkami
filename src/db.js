import Pool from 'pg';

const pool = new Pool({
    user: 'userdb',
    host: 'localhost',
    database: 'user_db',
    password: 'qwe',
    port: 5432,
})