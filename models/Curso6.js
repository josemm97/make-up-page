const mongoose = require('mongoose');

const { Schema } = mongoose;

const curso6Schema = new Schema({
  curso: { type: String, default: 'Colorista Capilar' },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  edad: { type: Number, required: true },
}, {
  timestamps: true,

});

const Curso6 = mongoose.model('Curso6', curso6Schema);

module.exports = Curso6;
