const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
    _id: String, // Clave generada
    NombreEmpleado: {
        Nombres: String,
        ApellidoPaterno: String,
        ApellidoMaterno: String
    },
    FechaAlta: { type: Date, default: Date.now },
    RFC: String,
    FechaNacimiento: Date,
    Sexo: String,
    FotoEmpleado: String, // Ruta de la imagen
    Domicilio: {
        Calle: String,
        NumeroExterior: String,
        NumeroInterior: String,
        Colonia: String,
        CP: String,
        Ciudad: String
    },
    Departamento: String,
    Puesto: String,
    Telefono: [String],
    CorreoElectronico: [String],
    ReferenciasFamiliares: [
        {
            NombreCompleto: String,
            Parentesco: String,
            Telefono: [String],
            CorreoElectronico: [String]
        }
    ],
    CursosTomados: [
        {
            NombreCurso: String,
            FechaInicio: Date,
            FechaTermino: Date,
            DocumentoRecibido: String
        }
    ],
    ParticipacionActividades: [
        {
            Actividad: String,
            Estatus: String
        }
    ]
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);