
export const validaciones = (nombre, apellido, edad, dni, numerocrimenes) => {

    // let existeDni = compararDni(dni);// se puede enviar de las dos formas al if
    // let dniNoValido = validarDNI(dni);

    if (nombre == "") {
        document.getElementById("nombre").focus();
        alert("Campo nombre vacio");
    } else if (apellido == "") {
        document.getElementById("apellido").focus();
        alert("Campo apellido vacio");
    } else if (edad == "") {
        document.getElementById("edad").focus();
        alert("Campo edad vacio");
    } else if (edad <= 0 || edad >= 100) {
        document.getElementById("edad").focus();
        alert("edad invalida de 0 a 100");
    } else if (!dni) { // !dni te dice que es lo contrario de, != es distinto de
        document.getElementById("dni").focus();
        alert("Campo DNI vacio");
    } else if (numerocrimenes == "") {
        document.getElementById("numerocrimenes").focus();
        alert("Campo Nº crimenes vacio");
    } else {

        return true;

    }
};
/*

 else if (dni) {// existeDni
        document.getElementById("dni").focus();
        alert("Existe el DNI");
    }
else if (validarDNI(dni)) {
        document.getElementById("dni").focus();
        alert('Dni erroneo, formato no válido');
    }


let Criminales = new Criminal(nombre, apellido, edad, dni, numerocrimenes);
        listaAmerica.push(Criminales);
        let index = listaAmerica.indexOf(Criminales);
        index += 1;

        listaCriminales(listaAmerica);

        document.getElementById("nombre").focus();
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("dni").value = "";
        document.getElementById("numerocrimenes").value = "";
*/