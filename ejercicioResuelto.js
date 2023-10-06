//Array
let listaColores = ["Amarillo", "Azul", "Rosa", "Naranja", "Morado"];
let listaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; //prueba

let entradaColor = "Verde";
let entradaDia = "Lunes"; //prueba

//Funcion para devolver las palabras del parametro uno y dos
function newArray(palabra, lista) {
    let resultado = [];
    for(let i= 0; i < lista.length; i++){
        if(lista[i].length > palabra.length){
            resultado.push(lista[i]); //Se pone un push para agregar los nuevos elementos al nuevo array
        }
    }
    agregarElementos(resultado);
}

//console.log(newArray(entradaColor, listaColores));

//Funcion para imprimir la lista en HTML
function agregarElementos(lista) {
    let listaElemento = document.getElementById("lista"); //Necesitamos traer el elemento ul del HTML
    for(let i = 0; i < lista.length; i++){
        let liColores = document.createElement ("li");
        liColores.innerHTML = lista[i];

        listaElemento.appendChild(liColores); //en cada iteracion se hace un appendChild li
    }

}
/*
let resultadoLista = newArray(entradaColor, listaColores);
agregarElementos(resultadoLista);


//Prueba
let resultadoLista2 = newArray(entradaDia, listaSemana);
agregarElementos(resultadoLista2); */

