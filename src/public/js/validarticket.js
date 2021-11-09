
async function validarticket() {
    var nombre, apellido, correo, telefono, dni, institucion, operacion, expresionemail, expresionnombres,
        expresionnumeros;

    nombre = document.getElementById("nombretickets").value;

    apellido = document.getElementById("apellidotickets").value;

    correo = document.getElementById("correotickets").value;

    telefono = document.getElementById("telefono").value;

    dni = document.getElementById("dni").value;

    institucion = document.getElementById("institucion").value;

    operacion = document.getElementById("operacionnumero").value;


    expresionemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    expresionnombres = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])([a-zA-ZÀ-ÿ\u00f1\u00d1]\s*)+$/i;
    expresionnumeros = /^[1-9][0-9]{12}$/i;

    if (nombre === "" || apellido === "" || correo === "" || telefono === "" || dni === "" || institucion === "" ) {
        alert("Todos los campos son obligatorios ");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre no es válido");
        return false;
    } else if (!expresionnombres.test(nombre)) {
        alert("El nombre no es válido");
        return false;
    } else if (apellido.length > 30) {
        alert("El apellido no es válido");
        return false;
    }else if (correo.length > 50) {
        alert("El correo no es válido");
        return false;
    } else if (!expresionemail.test(correo)) {
        alert("El correo electronico no es válido");
        return false;
    } else if (telefono.length > 15) {
        alert("El telefono es muy largo ");
        return false;
    } else if (isNaN(telefono)) {
        alert("El telefono ingresado no es válido");
        return false;
    } else if (dni.length !== 8) {
        alert("El número de D.N.I no es válido");
        return false;
    } else if (isNaN(dni)) {
        alert("El número de telefono no es válido");
        return false;
    } else {
        alert("Ingreso de datos exitoso");
    }


}
