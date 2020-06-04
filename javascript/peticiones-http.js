

const criminalesJson = 'json/index.json';

export const obtenerCriminales = async () => {

    try {

        const respuesta = await fetch(criminalesJson);
        const lista = await respuesta.json();

        return lista;

    } catch (error) {

        console.log(error);

    }

}