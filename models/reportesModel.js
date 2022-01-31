var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reportesSchema = new Schema({
  id_usuario: Number,
  cedula: String,
  nombres: String,
  apellidos: String,
  fecha_nacimiento: Date,
  celular: String,
  rol: String,
  provincia: String,
  ciudad: String,
  referencia: String,
  correo: String,
  contrasenia: String,
  id_auto: Number,
  placa: String,
  marca: String,
  modelo: String,
  color: String,
  clave_llave: String,
  fecha_registro: Date,
});

module.exports = mongoose.model("reportes", reportesSchema);
