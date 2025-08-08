require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Importa los routers correctamente
const prestamosRouter = require('./routes/prestamos');
const crmRouter = require('./routes/crm');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api/prestamos', prestamosRouter);
app.use('/api/crm', crmRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 PAINITA corriendo en http://localhost:${PORT}`);
});