const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarritoSchema = new Schema({
    nombre: { type: String},
    precio:{ type: Number},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Carrito', CarritoSchema);