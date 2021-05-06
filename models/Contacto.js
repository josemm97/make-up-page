const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactoSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  mensaje: { type: String, required: true },
}, {
  timestamps: true,

});
module.exports = mongoose.models.Contacto || mongoose.model('Contacto', contactoSchema);

// module.exports = mongoose.models.Contacto || mongoose.model('Contacto', contactoSchema);
