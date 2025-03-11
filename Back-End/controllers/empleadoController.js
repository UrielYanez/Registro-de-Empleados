const Empleado = require('../models/empleadoModel');
const { generarClave, generarRFC } = require('../utils/generadores');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Los archivos se guardan en la carpeta "uploads"
    },
    filename: (req, file, cb) => {
        // Obtener el nombre del empleado
        const { Nombres, ApellidoPaterno, ApellidoMaterno } = req.body;

        // Genera un nombre de archivo
        const nombreArchivo = `${Nombres}-${ApellidoPaterno}-${ApellidoMaterno}${path.extname(file.originalname)}`;

        // Reemplaza espacios y caracteres especiales
        const nombreArchivoLimpio = nombreArchivo
            .normalize('NFD') // Quita acentos
            .replace(/\s+/g, '-')
            .replace(/[^\w.-]/g, '')
            .toLowerCase();

        cb(null, nombreArchivoLimpio); // Guarda el archivo con el nombre personalizado
    }
});

const upload = multer({ storage }).single('FotoEmpleado');

exports.crearEmpleado = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(500).json({ error: err.message });

        const { Nombres, ApellidoPaterno, ApellidoMaterno, FechaNacimiento, ...resto } = req.body;
        const clave = await generarClave(Nombres, ApellidoPaterno, ApellidoMaterno);
        const rfc = generarRFC(ApellidoPaterno, ApellidoMaterno, Nombres, new Date(FechaNacimiento));

        const empleado = new Empleado({
            _id: clave,
            NombreEmpleado: { Nombres, ApellidoPaterno, ApellidoMaterno },
            RFC: rfc,
            FotoEmpleado: req.file ? req.file.path : null,
            ...resto
        });

        await empleado.save();
        res.status(201).json(empleado);
    });
};

exports.obtenerEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

exports.actualizarEmpleado = async (req, res) => {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(empleado);
};

exports.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.status(204).send();
};