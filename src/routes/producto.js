const router = require('express').Router();
const Productos = require('../models/productos');
router.get('/producto/add',(req,res)=>{
    res.render('productos/add-producto.hbs');
});

router.post('/producto/new-producto', async (req,res)=>{
    const { nombre, descripcion, precio, cantidad,categoria } = req.body;
    const errors = [];
    if(!nombre){
        errors.push({text: 'escriba un titulo porfavor'});
    }
    if(!descripcion){
        errors.push({ description: 'escriba descripcion porfavor'});
    }
    if(errors.length > 0){
        res.render('productos/add-producto.hbs',{
            errors,
            nombre,
            descripcion,
            precio,
            cantidad
        });
    }
    else{
       const newProducto = new Productos({nombre, descripcion, precio, cantidad,categoria});
       await newProducto.save();
       
       console.log(newProducto);
      res.redirect('/');
    }
    
    
});
module.exports = router;