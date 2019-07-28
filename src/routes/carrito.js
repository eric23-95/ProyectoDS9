const router = require('express').Router();
const Carrito = require('../models/carrito');

router.post('/carrito/agregar', async (req,res)=>{
    const {nombre, precio }  = req.body;
    const newCarrito = new Carrito({nombre, precio});
       await newCarrito.save();
       console.log(newCarrito);
      res.redirect('/');
});

router.get('/ver-carrito', async(req,res)=>{
    const carrito = await Carrito.find()
 
    res.render('partials/carrito.hbs', {carrito});
});

router.delete('/delete-product-carrito/:id', async (req,res)=>{
    await Carrito.findByIdAndDelete(req.params.id);
    res.redirect('/ver-carrito');
 });
module.exports = router;