

export const listaCriminales = (lista) => {

    let new_ul = document.createElement('ul');
    new_ul.setAttribute('id', 'lista');
    let new_inner = document.querySelector('#info').appendChild(new_ul);

    document.querySelector('#lista').innerHTML = "";

    lista.forEach(function (criminales, index) {


        let new_li = document.createElement('li');
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.setAttribute('id', 'numero');
        new_inner.innerHTML = `Nº ${(index += 1)} <br>`;

        new_li = document.createElement('li');
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.innerHTML = `Nombre: ${criminales.nombre}`;

        new_li = document.createElement('li');
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.innerHTML = `Apellidos: ${criminales.apellido}`;

        new_li = document.createElement('li');
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.innerHTML = `Edad: ${criminales.edad}`;

        new_li = document.createElement('li');
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.innerHTML = `DNI: ${criminales.dni}`;

        new_li = document.createElement('li');
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.innerHTML = `Nº Crimenes: ${criminales.numerocrimenes}`;

        let new_input = document.createElement('input');
        new_input.setAttribute('type', 'submit');
        new_input.setAttribute('id', 'boton_borrar');
        new_input.setAttribute('value', 'Borrar');
        new_input.setAttribute("onclick", "borrarCriminal(" + index + ")");
        new_inner = document.querySelector('#lista').appendChild(new_input);

    });
}
const borrarCriminal = (index) => {

    index -= 1;

    lista.splice(index, 1);


    listaCriminales(lista);
}
export const ordenar = (valor, lista) => {

    switch (valor) {

        case "lascen":
        case "ldescen":

            lista.reverse();

            break;

        case "nascen":

            lista.sort((a, b) => a.numerocrimenes - b.numerocrimenes);

            break;

        default:

            lista.sort((a, b) => b.numerocrimenes - a.numerocrimenes);

            break;
    }

    return lista;

};