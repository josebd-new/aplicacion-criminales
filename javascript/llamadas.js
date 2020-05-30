//import { Criminal } from '../classes/clase.criminal.js'
//import { listaCriminales } from './funciones.js'

export const llamadaJson = (lista) => {


    $(document).ready(function () {

        $.getJSON("json/index.json", function (America) {

            let listaAmerica = America;
            // con map modificas el array por cada iteracion cambia el elemento
            lista = listaAmerica.map(criminal => {

                return Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);

            });


            // console.log(lista);

            // listaCriminales(lista);
        });
    });

}
/*
fetch("json/index.json")

    .then(res => res.json())
    .then(lista => {

        lista = lista.map(criminal => {

            return Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);

        });

        listaCriminales(lista);

        console.log(lista);

    })
    .catch(err => console.error(err));
 */
