
import { Criminal } from '../classes/clase.criminal.js'
import { CriminalLista } from '../classes/classe.criminaleslista.js'
import { listaCriminales, ordenar, rellenar } from './funciones.js'


let lista = [];

$(document).ready(function () {

    $.getJSON("json/index.json", function (America) {

        let listaAmerica = America;



        // rellenar(listaAmerica);
        // listaCriminales(listaAmerica);
        lista = listaAmerica.map((criminal) => {

            return Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);

        });
        listaCriminales(lista);
        console.log(lista);
    });
});
let seleccion = document.getElementById("seleccion");
seleccion.addEventListener('change', function () {

    // captura el valor de la propiedad value que esta en los options 
    // console.log(seleccion.value);
    // captura el texto de los options
    //var textoOptions = seleccion.options[seleccion.selectedIndex].text;
    //console.log(textoOptions);
    let valor = seleccion.value;
    let ordenado = ordenar(valor, lista);
    listaCriminales(ordenado);
});














/*
    console.log({ nombre });

        leerJson({nombre, apellido, edad, dni, numerocrimenes});

    });
const jose = new Criminal('jose', 'breña', 54, '12458936L', 60);
const pepe = new Criminal('pepe', 'lopez', 25, '45896185L', 90);
const luis = new Criminal('luis', 'diaz', 35, '52469987P', 85);

const listaCriminales = [];

//console.log({ Jose });

listaCriminales.push(jose, pepe, luis);

//console.log(jose.dni);
listaCriminales.forEach((criminal, index) => {

    console.log(index += 1);
    console.log(criminal.nombre);
    console.log(criminal.apellido);

}); */









