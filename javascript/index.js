
import { Criminal } from '../classes/clase.criminal.js'
//import { CriminalLista } from '../classes/classe.criminaleslista.js'
import { listaCriminales, ordenar } from './funciones.js'


let lista = [];

$(document).ready(function () {

    $.getJSON("json/index.json", function (America) {

        let listaAmerica = America;

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



console.log(lista);





















