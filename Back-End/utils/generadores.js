const mongoose = require('mongoose');
const Counter = require('../models/counterModel');

async function generarClave(nombres, apellidoPaterno, apellidoMaterno) {
    const inicialesNombre = nombres.split(' ')
                                  .map(nombre => nombre[0].toUpperCase())
                                  .join('');
    const inicialPaterno = apellidoPaterno[0].toUpperCase();
    const inicialMaterno = apellidoMaterno[0].toUpperCase();
    const prefijo = `${inicialesNombre}${inicialPaterno}${inicialMaterno}`;

    const consecutivo = await Counter.findOneAndUpdate(
        { _id: "claveEmpleado" },
        { $inc: { secuencia: 1 } },
        { upsert: true, new: true }
    );

    return `${prefijo}-${consecutivo.secuencia.toString().padStart(3, '0')}`;
}

function generarRFC(apellidoPaterno, apellidoMaterno, nombres, fechaNacimiento) {
    const partePaterno = apellidoPaterno.substring(0, 2).toUpperCase();
    const parteMaterno = apellidoMaterno[0].toUpperCase();
    const primerNombre = nombres.split(' ')[0][0].toUpperCase();
    const año = fechaNacimiento.getFullYear().toString().slice(-2);
    const mes = (fechaNacimiento.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaNacimiento.getDate().toString().padStart(2, '0');

    return `${partePaterno}${parteMaterno}${primerNombre}-${año}${mes}${dia}`;
}

module.exports = { generarClave, generarRFC };