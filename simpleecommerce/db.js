const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432,
});


(async () => {
    try {
        await pool.connect();
        console.log("Connected to the PostgreSQL database successfully.");
    } catch (error) {
        console.error("Failed to connect to the PostgreSQL database:", error.message);
    }
})();

module.exports = pool;      