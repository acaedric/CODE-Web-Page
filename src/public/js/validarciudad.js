function validarciudad(){
   
    var nombre,correo,tema,mensaje,expresion;
    nombre=document.getElementById("nombre").value;
    nombre=document.getElementById("apellido").value;
    correo=document.getElementById("correo").value;
    

    expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(nombre === ""|| apellido===""||correo=== "") {

        alert("Todos los campos son obligatorios")
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellido.length>30){
        alert("El apellido es muy largo");
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
    else{
        alert("Por favor espera a que cargue la ciudad emprendedora")
    }


  
}

