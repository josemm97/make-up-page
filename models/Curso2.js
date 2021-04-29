const mongoose = require('mongoose');

const { Schema } = mongoose;

const curso2Schema = new Schema({
  curso: { type: String, default: 'Maquillista Profesional' },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  edad: { type: Number, required: true },
}, {
  timestamps: true,

});

module.exports = mongoose.models.Curso2
 || mongoose.model('Curso2', curso2Schema);
