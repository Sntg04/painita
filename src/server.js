require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Configuración básica
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api/prestamos', require('./routes/prestamos'));
app.use('/api/crm', require('./routes/crm'));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PAINITA corriendo en puerto ${PORT}`);
});