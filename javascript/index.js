
import { Criminal } from '../classes/clase.criminal.js'
import { listaCriminales, ordenar, crearLista } from './funciones.js'
import { validaciones } from './validaciones.js'
import { obtenerCriminales } from './peticiones-http.js'

let lista = [];

obtenerCriminales()
    .then(listaresp => {

        lista = listaresp.map(criminal => {

            return Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);
        });

        document.querySelector('#verlista').innerHTML = crearLista(lista).outerHTML;

    });

/* let lista = [];

$(document).ready(function () {

    $.getJSON("json/index.json", function (america) {

        // con map modificas el array por cada iteracion cambia el elemento

        lista = america.map(criminal => {

            return Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);

        });

        listaCriminales(lista);
        
    });
});
 */
const seleccion = document.querySelector('#seleccion');
seleccion.addEventListener('change', () => {
    // captura el valor de la propiedad value que esta en los options 
    // console.log(seleccion.value);
    // captura el texto de los options
    //var textoOptions = seleccion.options[seleccion.selectedIndex].text;
    //console.log(textoOptions);
    let valor = seleccion.value,
        ordenado = ordenar(valor, lista);
    crearLista(ordenado);

});

const crearNuevoCriminal = document.querySelector('#boton_crear');
crearNuevoCriminal.addEventListener('click', () => {

    const nombre = document.querySelector('#nombre').value,
        apellido = document.querySelector('#apellido').value,
        edad = document.querySelector('#edad').value;
    let dni = document.querySelector('#dni').value;
    dni = dni.toUpperCase();
    const numerocrimenes = document.querySelector('#numerocrimenes').value;

    const formulario = document.forms[2].elements;

    for (let i = 0; i < formulario.length; i++) {

        const elemento = formulario[i];

        if (elemento.value.length == 0) {

            elemento.focus();
            break;
        }
    }
    // find devuelve solo el objeto donde se cumpla la condicion si alguno de los objetos la cumple
    const criminalConMismoDni = lista.find((criminales) => criminales.dni.toUpperCase() === dni),
        valido = validaciones(nombre, apellido, edad, dni, numerocrimenes, criminalConMismoDni);

    if (valido === true) {

        const criminal = Criminal.crearCriminal(nombre, apellido, edad, dni, numerocrimenes);
        lista.push(criminal);

        document.querySelector('#formulario').reset();
        document.querySelector('#nombre').focus();

    }
});

const buscar = document.querySelector('#buscar');
buscar.addEventListener('click', () => {

    let nombre = document.querySelector('#buscar_nombre').value;
    nombre = nombre.toUpperCase();
    // filter devuelve un array con todos los objetos que cumplen la condicion y te envia una copia 
    // que no afecta a la lista original
    const criminalesConNombre = lista.filter((criminales) => criminales.nombre.toUpperCase() === nombre);

    crearLista(criminalesConNombre);

});































