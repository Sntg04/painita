const express = require('express');
const app = express();
const path = require('path');

// Configurar middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Ruta para solicitud de préstamo
app.post('/api/solicitar', (req, res) => {
    const { monto, plazo } = req.body;
    // Aquí iría la lógica para guardar en la base de datos
    res.json({ success: true, message: "Solicitud recibida" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});