const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Necesario para Render PostgreSQL
  }
});

// Verificar conexión
pool.query('SELECT NOW()')
  .then(() => console.log('✅ Conexión exitosa a PostgreSQL'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = pool;