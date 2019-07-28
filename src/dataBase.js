const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/proyecto-final-ds9', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB Conectada'))
    .catch(err => console.log(err));