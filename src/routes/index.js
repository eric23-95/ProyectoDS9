const router = require('express').Router();
const Producto = require('../models/productos');

router.get('/', async (req,res)=>{
 
    const product = await Producto.find();
    res.render('partials/index.hbs',{product}); 
    //console.log(product) ;
});


module.exports = router; 