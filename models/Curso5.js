const mongoose = require('mongoose');

const { Schema } = mongoose;

const curso5Schema = new Schema({
  curso: { type: String, default: 'Decoracion' },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  edad: { type: Number, required: true },
}, {
  timestamps: true,

});

const Curso5 = mongoose.model('Curso5', curso5Schema);

module.exports = Curso5;
