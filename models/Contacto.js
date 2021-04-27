const mongoose = require('mongoose');

const { Schema } = mongoose;

const contacto2Schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  mensaje: { type: String, required: true },
}, {
  timestamps: true,

});

const Contacto = mongoose.model('Contacto', contacto2Schema);

module.exports = Contacto;
