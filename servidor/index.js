const express = require('express');
const conectarDB = require('./config/db');
 
// Creamos el servidor
const app = express();
conectarDB ();
// Conectamos a la BD
  app.use('/api/productos', require('./routes/producto'));


 /*app.get('/',(req, res)=>{
    res.send('Hola mundo');
 
 })*/

 
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})