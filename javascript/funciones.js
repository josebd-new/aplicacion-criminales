import { Criminal } from '../classes/clase.criminal.js'

export const listaCriminales = (lista) => {

    let new_ul = document.createElement('ul');
    new_ul.setAttribute('id', 'lista');
    let new_inner = document.querySelector('#info').appendChild(new_ul);

    document.getElementById("lista").innerHTML = "";

    lista.forEach(function (Criminales, index) {


        let new_li = document.createElement("li");
        new_inner = document.querySelector('#lista').appendChild(new_li);
        new_inner.setAttribute("id", "numero");
        new_inner.innerHTML = "Nº" + (index += 1) + "<br>";

        new_li = document.createElement("li");
        new_inner = document.querySelector("#lista").appendChild(new_li);
        new_inner.innerHTML = "Nombre: " + Criminales.nombre;

        new_li = document.createElement("li");
        new_inner = document.querySelector("#lista").appendChild(new_li);
        new_inner.innerHTML = "Apellido: " + Criminales.apellido;

        new_li = document.createElement("li");
        new_inner = document.querySelector("#lista").appendChild(new_li);
        new_inner.innerHTML = "Edad: " + Criminales.edad;

        new_li = document.createElement("li");
        new_inner = document.querySelector("#lista").appendChild(new_li);
        new_inner.innerHTML = "DNI: " + Criminales.dni;

        new_li = document.createElement("li");
        new_inner = document.querySelector("#lista").appendChild(new_li);
        new_inner.innerHTML = "NºCrimenes: " + Criminales.numerocrimenes;


        let new_input = document.createElement("input");
        new_input.setAttribute("type", "submit");
        new_input.setAttribute("id", "boton_borrar");
        new_input.setAttribute("value", "Borrar");
        new_input.setAttribute("onclick", "borrarCriminal(" + index + ")");
        new_inner = document.getElementById("lista").appendChild(new_input);

    });
    console.log(lista);



}
export const convertir = (listaAmerica) => {

  //  let lista1 = [];

    /*   for (const criminal of listaAmerica) {
  
          let lista2 = [Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes)];
          return lista2;
          // console.log(lista);
  
          console.log(lista1);
      
          for (let lista = 0; lista < listaAmerica.length; lista++) {
      
              let lista2 = listaAmerica[lista];
      
              return lista2;
  
      } */




    }


export const ordenar = (valor,lista) => {

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

export const rellenar=(listaAmerica)=>{

   return listaAmerica

  // listaAmerica = listaAmerica;

  console.log(listaAmerica );
  
   
}

    //  listaCriminales(lista1);


    /*   listaAmerica.forEach(() => {
  
          // const lista =[];
          lista = Criminal.leerJson(criminal.nombre, criminal.apellido, criminal.edad, criminal.dni, criminal.numerocrimenes);
  
  
      }); */






