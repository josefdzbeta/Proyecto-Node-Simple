import {Viaje} from '../models/Viaje.js'
import { Testimonio } from '../models/Testimonios.js';

const paginaInicio = async(req, res)=>{ 
    //Consultar bd para mostrar varios viajes
    try {
        const viajes = await Viaje.findAll({limit:3});
        res.render('inicio', {
            pagina : 'Inicio',
            clase: 'home',
            viajes
        });    
    } catch (error) {
        console.log(error);
    }
    
    
}

const paginaNosotros = (req, res)=>{ 
    res.render('nosotros', {
        pagina: 'Nosotros'
    }) 

}
const paginaViajes = async (req, res)=>{
    
    //Consultar BD
    const viajes = await Viaje.findAll(); //Obtiene todos los resultados que haya en esa tabla
    // console.log(viajes);
    
    res.render('viajes', {
        pagina : 'Próximos viajes',
        viajes

    });
}
const paginaTestimonios = async (req, res)=>{ 

    try {
        const testimonios = await Testimonio.findAll();
        res.render('testimonios', {
            pagina : 'Testimonios',
            testimonios
        });
    } catch (error) {
        console.log(error);
    }

  
}

//Mostrar viaje por slug
const paginaDetalleViaje = async (req, res) =>{
    const {slug} = req.params;
    console.log(req.params.slug);
    try {
        const viaje = await Viaje.findOne({where : {slug}});
        
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })    
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}