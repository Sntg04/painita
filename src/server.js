require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Configuración inicial
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api/prestamos', require('./routes/prestamos'));
app.use('/api/crm', require('./routes/crm'));

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 PAINITA corriendo en http://localhost:${PORT}`);
});