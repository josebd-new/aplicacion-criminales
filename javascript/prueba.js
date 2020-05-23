class Criminal {

    nombre = '';
    apellido = '';
    edad = '';
    dni = '';
    numerocrimenes = '';

    constructor(nombre, apellido, edad, dni, numerocrimenes) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.numerocrimenes = numerocrimenes;

    }

}

$(document).ready(function () {

    $.getJSON("json/index.json", function (America) {

        listaAmerica = America;
        listaCriminales(listaAmerica);

    });
});

new_ul = document.createElement("ul");
new_ul.setAttribute("id", "lista");
new_inner = document.getElementById("info").appendChild(new_ul);

const listaCriminales = function (lista) {

    document.getElementById("lista").innerHTML = "";

    lista.forEach(function (Criminales, index) {

        new_li = document.createElement("li");
        new_inner = document.getElementById("lista").appendChild(new_li);
        new_inner.setAttribute("id", "numero");
        new_inner.innerHTML = "Nº" + (index += 1);

        new_li = document.createElement("li");
        new_inner = document.getElementById("lista").appendChild(new_li);
        new_inner.innerHTML = "Nombre: " + Criminales.nombre;
        innerHTML = "<br><br>";

        new_li = document.createElement("li");
        new_inner = document.getElementById("lista").appendChild(new_li);
        new_inner.innerHTML = "Apellido: " + Criminales.apellido;

        new_li = document.createElement("li");
        new_inner = document.getElementById("lista").appendChild(new_li);
        new_inner.innerHTML = "Edad: " + Criminales.edad;

        new_li = document.createElement("li");
        new_inner = document.getElementById("lista").appendChild(new_li);
        new_inner.innerHTML = "DNI: " + Criminales.dni;

        new_li = document.createElement("li");
        new_inner = document.getElementById("lista").appendChild(new_li);
        new_inner.innerHTML = "NºCrimenes: " + Criminales.numerocrimenes;

        new_input = document.createElement("input");
        new_input.setAttribute("type", "submit");
        new_input.setAttribute("id", "boton_borrar");
        new_input.setAttribute("value", "Borrar");
        new_input.setAttribute("onclick", "borrarCriminal(" + index + ")");
        new_inner = document.getElementById("lista").appendChild(new_input);


    });
};

const crearCriminal = function () {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    dni = dni.toUpperCase();
    let numerocrimenes = document.getElementById("numerocrimenes").value;

    let existeDni = compararDni(dni);// se puede enviar de las dos formas al if
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
    } else if (existeDni) {
        document.getElementById("dni").focus();
        alert("Existe el DNI");
    } else if (validarDNI(dni)) {
        document.getElementById("dni").focus();
        alert('Dni erroneo, formato no válido');
    } else if (numerocrimenes == "") {
        document.getElementById("numerocrimenes").focus();
        alert("Campo Nº crimenes vacio");
    } else {

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
    }
};
const borrarCriminal = function (index) {

    index -= 1;

    listaAmerica.splice(index, 1);

    listaCriminales(listaAmerica);

};

let seleccion = document.getElementById("seleccion");
seleccion.addEventListener('change', function () {

    // captura el valor de la propiedad value que esta en los options 
    // console.log(seleccion.value);
    // captura el texto de los options
    //var textoOptions = seleccion.options[seleccion.selectedIndex].text;
    //console.log(textoOptions);
    let valor = seleccion.value;
    ordenar(valor);

});
const ordenar = function (valor) {

    switch (valor) {

        case "lascen":
        case "ldescen":

            listaAmerica.reverse();

            break;

        case "nascen":

            listaAmerica.sort((a, b) => a.numerocrimenes - b.numerocrimenes);

            break;

        default:

            listaAmerica.sort((a, b) => b.numerocrimenes - a.numerocrimenes);

            break;
    }

    listaCriminales(listaAmerica);

}
const compararDni = function (dni) {

    dni = dni.toUpperCase();
    // find devuelve solo el objeto donde se cumpla la condicion si alguno de los objetos la cumple
    const criminalConMismoDni = listaAmerica.find((Criminales) => Criminales.dni.toUpperCase() === dni);

    return criminalConMismoDni;

};

const buscarCriminalNombre = function () {

    let nombre = document.getElementById("buscar_nombre").value;
    nombre = nombre.toUpperCase();
    // filter devuelve un array con todos los objetos que cumplen la condicion y te envia una copia 
    // que no afecta a la lista original
    const criminalesConNombre = listaAmerica.filter((Criminales) => Criminales.nombre.toUpperCase() === nombre);

    if (criminalesConNombre.length === 0) {

        new_div = document.createElement("div");
        new_div.setAttribute("id", "mensaje");
        new_div = document.getElementById("info").insertAdjacentElement('afterend', new_div);
        // new_div = document.getElementById("info").appendChild(new_div);
        new_div.innerHTML = "<h1>El nombre buscado no existe<h1>";


    } else {

        if (typeof new_div != 'undefined') {

            new_div.remove();
        }

    }

    listaCriminales(criminalesConNombre);

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