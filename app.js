/*- Comentarios Ale
 - Me comento que está bien preguntar por las dudas en las indicaciones que te dan
- Lo primero que se tiene que hacer es ligar mi documento html con los documentos de JS o Css.
- Me falta practicar mucho para las funciones
- No pasaría la prueba
*/

let inputcolores = ["Amarillo", "Azul", "Rosa", "Naranja", "Morado"];
let inputcolor = "Verde";

console.log (inputcolores);

function arrayColores (color, colores){
    let resultado = [];
    for(let i = 0; i < colores.lenght; i++){
        if(colores[i].lenght > color.lenght){
            resultado[i] = colores[i];
        }
    }
    return (resultado);

}

console.log (arrayColores(inputcolor,inputcolores));

/*function suma (a,b){
    let resultado = a+b;
    return resultado;

}
 console.log (suma(5,3));
*/

