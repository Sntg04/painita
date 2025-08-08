const db = require('../models/database');

async function createTables() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS clientes (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        telefono VARCHAR(20),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS prestamos (
        id SERIAL PRIMARY KEY,
        cliente_id INTEGER REFERENCES clientes(id),
        monto DECIMAL(10, 2) NOT NULL,
        plazo_dias INTEGER NOT NULL,
        estado VARCHAR(20) DEFAULT 'pendiente',
        fecha_solicitud TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('✅ Tablas creadas exitosamente');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error al crear tablas:', err);
    process.exit(1);
  }
}

createTables();