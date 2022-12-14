import {Viaje} from '../models/Viaje.js'


const paginaInicio = (req, res)=>{ 
    res.render('inicio', {
        pagina : 'Inicio'
    });
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
const paginaTestimonios = (req, res)=>{ 
    res.render('testimonios', {
        pagina : 'Testimonios'
    });
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