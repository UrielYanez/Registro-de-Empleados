const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const empleadoRoutes = require('./routes/empleadoRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); //se utiliza para poder subir las imagenes

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/empleados')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));


// Usar rutas
app.use('/api/empleados', empleadoRoutes);

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});