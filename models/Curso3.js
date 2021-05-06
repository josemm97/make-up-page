const mongoose = require('mongoose');

const { Schema } = mongoose;

const curso3Schema = new Schema({
  curso: { type: String, default: 'Tecnico en uñas' },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  edad: { type: Number, required: true },
}, {
  timestamps: true,

});

module.exports = mongoose.models.Curso3
 || mongoose.model('Curso3', curso3Schema);
