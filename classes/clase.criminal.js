import { convertir } from '../javascript/funciones.js'

export class Criminal {


    static leerJson(nombre, apellido, edad, dni, numerocrimenes) {

        return new Criminal(nombre, apellido, edad, dni, numerocrimenes);

    };

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