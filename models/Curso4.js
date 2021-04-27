const mongoose = require('mongoose');

const { Schema } = mongoose;

const curso4Schema = new Schema({
  curso: { type: String, default: 'Peinados' },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  edad: { type: Number, required: true },
}, {
  timestamps: true,

});

const Curso4 = mongoose.model('Curso4', curso4Schema);

module.exports = Curso4;
