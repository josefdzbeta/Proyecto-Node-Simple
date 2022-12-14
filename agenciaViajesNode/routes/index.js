import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaDetalleViaje} from '../controllers/paginasController.js'
const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);// "Comodín"  para no tener que crear tantas rutas
router.get('/testimonios', paginaTestimonios);


export default router;






// router.get('/Nosotros', (req, res)=>{ 
//     const viajes = 'Viajes a Alemania' 
//     // res.render('nosotros', {
//     //     viajes
//     // })Pasar variables 
//     res.render('nosotros', {
//         pagina: 'Nosotros'
//     }) //Busca el archivo .pug y lo renderiza

// });
// router.get('/viajes', (req, res)=>{ 
//     res.render('viajes', {
//         pagina : 'Viajes'
//     });
// });
// router.get('/testimonios', (req, res)=>{ 
//     res.render('testimonios', {
//         pagina : 'Testimonios'
//     });
// });

// router.get('/Contacto', (req, res)=>{ 
//     res.send('Contacto')
// });
