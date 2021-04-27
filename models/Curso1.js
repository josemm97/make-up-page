const mongoose = require('mongoose');

const { Schema } = mongoose;

const curso1Schema = new Schema({
  curso: { type: String, default: 'Peluqueria Profesional' },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  edad: { type: Number, required: true },
}, {
  timestamps: true,

});

const Curso1 = mongoose.model('Curso1', curso1Schema);

module.exports = Curso1;
