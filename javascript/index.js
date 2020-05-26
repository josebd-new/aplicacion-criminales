
import { Criminal } from '../classes/clase.criminal.js'
import { listaCriminales, ordenar } from './funciones.js'
import { validaciones } from './validaciones.js'

let lista = [];

$(document).ready(function () {

    $.getJSON("json/index.json", function (America) {

        let listaAmerica = America;
        // con map modificas el array por cada iteracion cambia el elemento
        lista = listaAmerica.map((criminal) => {

            return Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);

        });
        listaCriminales(lista);
        console.log(lista);
    });
});
const crearNuevoCriminal = document.querySelector('#boton_crear');
crearNuevoCriminal.addEventListener('click', () => {

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    let dni = document.querySelector('#dni').value;
    dni = dni.toUpperCase();
    const numerocrimenes = document.querySelector('#numerocrimenes').value;

    const valido = validaciones(nombre, apellido, edad, dni, numerocrimenes);





});
const seleccion = document.querySelector('#seleccion');
seleccion.addEventListener('change', () => {
    // captura el valor de la propiedad value que esta en los options 
    // console.log(seleccion.value);
    // captura el texto de los options
    //var textoOptions = seleccion.options[seleccion.selectedIndex].text;
    //console.log(textoOptions);
    let valor = seleccion.value;
    let ordenado = ordenar(valor, lista);
    listaCriminales(ordenado);
});





























