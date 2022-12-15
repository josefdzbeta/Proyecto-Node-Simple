import express from "express";
import router from './routes/index.js';
import db from './config/db.js';

// const express = require("express"); // common js

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( ()=> console.log('Base de Datos conectada'))
    .catch ((error)=> console.log(error));


//Puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug');

//Crear propio middleware - Obtener el año actual
app.use((req, res, next/* -- hace que vaya al siguiente middleware*/) =>{
    // console.log(req);
    // console.log(res.locals);
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); 
    res.locals.nombresitio = 'Agencia de Viajes'
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Definir carpeta pública
app.use(express.static('public'));

//Añadir Router
app.use('/', router); //'Use' soporta get post put patch delete.. 

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
})



/*app.get('/', (req, res)=>{ //Request: petición que realizamos - Res: respuesta de exprés
    // res.send('hola mundo'); //Crear propia respuesta estática
   /* res.json({
    }) Enviar un Json
    // res.render();
    res.send('inicio');
});
//Muestra la info según la url
app.get('/Nosotros', (req, res)=>{ //Request: petición que realizamos - Res: respuesta de exprés
   res.send('Nosotros')
});
app.get('/Contacto', (req, res)=>{ 
    res.send('Contacto')
});*/

