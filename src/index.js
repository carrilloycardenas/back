const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


//configuraciones
app.use(cors());
app.set('port', process.env.PORT || 3001);
app.set('json spaces',2);

//middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/getProductos', require('./routes/getProductos'));

app.listen(app.get('port'),() => {
    console.log("server escuchando en el puerto" + app.get('port'))
});