const guardarTestimonio = (req,res) =>{
   
    //Validar formulario
    const {nombre, email, mensaje} = req.body
    
    //Existe express validator... 
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    }
    
    if(email.trim() === ''){
        errores.push({mensaje: 'El email está vacío'});

    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'});

    }

    if(errores.length>0){
        //Mostrar la vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            //Pasamos los valores de los campos para poder mantener la información en el formulario
            nombre,
            email,
            mensaje
        })
    }else{
        //Guardar en la base de datos
        
    }

}

export {
    guardarTestimonio
}