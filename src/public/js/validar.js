function validar(){
   
    var nombre,correo,tema,mensaje,expresion;
    nombre=document.getElementById("nombre").value;
    correo=document.getElementById("correo").value;
    tema=document.getElementById("tema").value;
    mensaje=document.getElementById("descripcion").value;

    expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(nombre === "" || correo ==="" || tema === "" || mensaje === "" ) {

        alert("Todos los campos son obligatorios")
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(correo.length>30){
        alert("El correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo electronico no es válido");
        return false;
    }
    else if (tema.length>20){
        alert("El tema es muy largo");
        return false;
    }
    else if(mensaje.length>600){
        alert("El mensaje es muy largo");
        return false;
    }

    else{
        alert("Tu mensaje ha sido enviado. Por favor espere la respuesta del equipo CODE")
    }


  
}

