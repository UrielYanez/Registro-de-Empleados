const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const Departamento = require('../models/departamentoModel');
const Empleado = require('../models/empleadoModel')
const Puesto = require('../models/puestoModel');
const Parentesco = require('../models/parentescoModel');
const Actividad = require('../models/actividadModel');


router.post('/', empleadoController.crearEmpleado);
router.get('/', empleadoController.obtenerEmpleados);
router.put('/:id', empleadoController.actualizarEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);

router.get('/departamentos', async (req, res) => {
    const departamentos = await Departamento.find({}, 'nombre');
    res.json(departamentos);
});

router.get('/puestos', async (req, res) => {
    const puestos = await Puesto.find({}, 'nombre');
    res.json(puestos);
});

router.get('/parentescos', async (req, res) => {
    const parentescos = await Parentesco.find({}, 'parentesco');
    res.json(parentescos);
});

router.get('/actividades', async (req, res) => {
    const actividades = await Actividad.find({}, 'nombre');
    res.json(actividades);
});

router.get('/:id', async (req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id);
        if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;