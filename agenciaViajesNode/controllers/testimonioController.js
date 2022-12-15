import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonio = async (req, res) => {

    //Validar formulario
    const { nombre, email, mensaje } = req.body

    //Existe express validator... 
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' });
    }

    if (email.trim() === '') {
        errores.push({ mensaje: 'El email está vacío' });

    }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' });

    }

    if (errores.length > 0) {

        //Consultar testimonios existentes
        const testimonios = await Testimonio.findAll();
        //Mostrar la vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            //Pasamos los valores de los campos para poder mantener la información en el formulario
            nombre,
            email,
            mensaje,
            testimonios
        })
    } else {
        //Guardar en la base de datos
        try {
            await Testimonio.create({
                nombre,
                email,
                mensaje
            });

            res.redirect('/testimonios');

        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonio
}