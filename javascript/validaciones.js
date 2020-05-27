

export const validaciones = (nombre, apellido, edad, dni, numerocrimenes, criminalConMismoDni) => {

    // let existeDni = compararDni(dni);// se puede enviar de las dos formas al if
    //let dniNoValido = validarDNI(dni);

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
    } else if (validarDNI(dni)) {
        document.getElementById("dni").focus();
        alert('Dni erroneo, formato no válido');
    } else if (criminalConMismoDni) {// existeDni
        document.getElementById("dni").focus();
        alert("Existe el DNI");
    } else if (numerocrimenes == "") {
        document.getElementById("numerocrimenes").focus();
        alert("Campo Nº crimenes vacio");
    } else {

        document.querySelector('#nombre').focus();
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";
        document.querySelector('#edad').value = "";
        document.querySelector('#dni').value = "";
        document.querySelector('#numerocrimenes').value = "";

        return true;
    }
};
const validarDNI = (dni) => {

    let numero;
    let letr;
    let letra;
    let expresion_regular_dni;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);

        return false;

    } else {

        return true;
    }

};



