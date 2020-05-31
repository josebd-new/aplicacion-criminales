

const criminalesJson = 'json/index.json';

export const obtenerCriminales = async () => {

    const respuesta = await fetch(criminalesJson);
    const lista = await respuesta.json();

    return lista;


}