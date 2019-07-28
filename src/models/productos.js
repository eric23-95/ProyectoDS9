const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true},
    descripcion: {type: String, required: true},
    precio:{ type: Number, required: true},
    cantidad:{type: Number, required: true},
    categoria:{type:String,required:true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Productos', ProductoSchema);