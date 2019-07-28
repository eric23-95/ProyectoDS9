const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

//Initializations
const app = express();
require('./database');

//Static File
app.use(express.static(path.join(__dirname,'public')));

//settings 
app.set('port',3000);
app.set('views', path.join(__dirname,('views')) );
app.engine('.hbs', exhbs({
    defaultLayouts: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    
    extname: '.hbs'
}));
app.set('views engine', '.hbs');
require('./database');
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/producto.js'));
app.use(require('./routes/carrito.js'));
//app.use(require('./routes/user.js')); 



//Server is Listen
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});