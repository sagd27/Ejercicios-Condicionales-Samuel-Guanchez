// Ejercicico 1
// let n1 = 4
// let n2 = 2

// if (n1 < n2) {
//         console.log(n1 + " no es mayor que " + n2);
// }

// Ejercicio 2

// let n1 = 5;
// let n2 = 2;

// if (n1 === n2) {
//         console.log(n1 + " son iguales " + n2);
// }else{
//         console.log(n1 + " no son igual " + n2);

// }

// Ejercicio 3


// let n1 = 2;
// let n2 = 2;

// if (n1 > n2) {
//         console.log(n1 + "  es mayor que " + n2);
// }else if(n1 < n2) {

//         console.log(n2 + " es mayor que " + n1);

// }else{

//         console.log(n1+ " y "  + n2 + " son iguales");
// }

// Ejercicio 4

// let n1 = 2;
// let n2 = 3;
// let n3 = 1;

// if (n1 < n2 && n1<n3) {
//         console.log(n1 +" (n1) es el numero mas chico");

// }else if(n2 < n1 && n2 < n3) {
//         console.log(n2 + " (n2) es el numero mas chico");

// }else{
//         console.log(n3 + " (n3) es el numero mas chico");

// }

// Ejercicio 5

// let persona1 = { nombre: "samuel", edad: 26 , altura: 1.79}
// let persona2 = { nombre: "carlos", edad: 29 , altura: 1.75}

// if(persona1.edad > persona2.edad) {

//         console.log(persona1.nombre + " es mayor que "+ persona2.nombre);

// }else{
//         console.log(persona2.nombre + " es nayor que " + persona1.nombre);

// }

// if(persona1.altura > persona2.altura) {

//         console.log(persona1.nombre + " es mas alto que "+ persona2.nombre);

// }else{
//         console.log(persona2.nombre + " es mas alto que " + persona1.nombre);

// }

// Ejercicio 6

 
// let nombre = prompt("ingrese su nombre")
// let edad = prompt("ingrese su edad")
// let altura = prompt(" ingrese su altura")
// let vision = prompt(" ingrese el estado de su vision (del 1 al 10)")

// if (edad >= 18 && altura >= 150 && vision >= 8) {


//         console.log("usted esta capacitado para conducir");
// }else{
//         console.log("usted NO esta capacitado para conducir");

// }

// Ejercicio 7

// let nombre= prompt("ingrese su nombre:");
// let tipoDePase=  prompt(" que tipo de pase tiene vip/normal");
// let entrada = prompt("tiene entrada si o no")



// if (nombre === "samuel" || tipoDePase == "vip") {
//         console.log("Usted tienen ingreso libre");

// }else if (entrada === "si"){
//         let usarEntrada = prompt("desea usar su entrada si/no")
//         if (usarEntrada === "si")
//                 console.log("bienvenido");
// }else{

//         let deseaComprar = prompt("Desea comprar si/no")
//         if (deseaComprar === "si") {
//                let dinero = parseInt( prompt("ingrese dinero disponible"));
//                 if(dinero >= 1000){
//                         console.log("venta exitosa, bienvenido");
//                 }else{

//                 console.log("fondos insuficientes");

//                 }
//         }else{
//                 console.log("lo siento no puede ingresar");
//         }
// }

// Ejercicio 8


// let incognita = 4
// let nroIngresado = parseInt(prompt("ingrese un numero del 1 al 10 por favor"))

// if (incognita !== nroIngresado) {
//         console.log("nro invalido por favor intente de nuevo(quedan 2 intentos");
//         nroIngresado = parseInt(prompt("ingrese un numero del 1 al 10 por favor"))
//         if (incognita !== nroIngresado) {
//                 console.log("nro invalido por favor intente de nuevo(quedan 1 intentos");
//                 nroIngresado = parseInt(prompt("ingrese un numero del 1 al 10 por favor"))
//         }
//          if (incognita !== nroIngresado) {
//         console.log("nro invalido, no te quedan intentos");
//          }  
// }else{
//         console.log(nroIngresado+ " es correcto");
// }

// Ejercicio 9

// Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 
//         años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 
//         45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje 
//         preguntando si en realidad tiene esa edad.


// const edad = parseInt(prompt("por favor ingrese su edad"))

// switch (true) {
//         case (edad >= 0 && edad <= 12):
//                 console.log("eres un infante");
//                 break;

//         case (edad >= 13 && edad <= 18):
//                 console.log("eres un adolescente");
//                 break;

//         case (edad >= 19 && edad <= 45):
//                 console.log("eres un mayor joven");
//                 break;

//         case (edad >= 45 && edad <= 100):
//                 console.log("eres anciano");
//                 break;

//         default:
//                 console.log("en realidad tiene esa edad?");
//                 break;
// }

// // Ejercicio 10



//         let jugador1 = prompt("Jugador 1, ingrese PIEDRA, PAPEL o TIJERAS:").toUpperCase();
//         let jugador2 = prompt("Jugador 2, ingrese PIEDRA, PAPEL o TIJERAS:").toUpperCase();

//         if ((jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERAS") || 
//             (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERAS")) {
//             alert("Uno de los jugadores ha hecho trampa.");
//         } else {
//             if (jugador1 === jugador2) {
//                 alert("Empate");
//             } else if ((jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
//                        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
//                        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")) {
//                 alert("Jugador 1 gana");
//             } else {
//                 alert("Jugador 2 gana");
//             }
//         }

// // Ejercicio 11

// let color = prompt("Ingrese un color:").toLowerCase();

//         switch (color) {
//             case "blanco":
//             case "negro":
//                 alert("Falta de color");
//                 break;
//             case "verde":
//                 alert("El color de la naturaleza");
//                 break;
//             case "azul":
//                 alert("El color del agua");
//                 break;
//             case "amarillo":
//                 alert("El color del sol");
//                 break;
//             case "rojo":
//                 alert("El color del fuego");
//                 break;
//             case "marrón":
//             case "marron":
//                 alert("El color de la tierra");
//                 break;
//             default:
//                 alert("Excelente elección, no lo teníamos pensado.");
//         }

// Ejercicio 12

// let valor1 = parseFloat(prompt("Ingrese el primer valor numérico:"))
// let valor2 = parseFloat(prompt("Ingrese el segundo valor numérico:"))
// let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división):").toLowerCase()

// let resultado

// switch (operacion) {
//     case "suma":
//         resultado = valor1 + valor2;
//         alert("La suma de " +valor1 + " y " +valor2+ " es " +{resultado};
//         break;
//     case "resta":
//         resultado = valor1 - valor2;
//         alert("La resta de " +valor1+ " y " +valor2+ " es " +resultado);
//         break;
//     case "multiplicación":
//         resultado = valor1 * valor2;
//         alert("La multiplicación de " +valor1+ " y " +valor2+ " es " +resultado);
//         break;
//     case "división":
//         if (valor2 !== 0) {
//             resultado = valor1 / valor2;
//             alert("La división de " +valor1+" entre" +valor2+ "es" +resultado);
//         } else {
//             alert("ERROR: No se puede dividir por cero.");
//         }
//         break;
//     default:
//         alert("Operación no válida. Por favor, ingrese suma, resta, multiplicación o división.");
// }

// Ejercicio 13

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let numeroDNI = prompt("Ingrese su número de DNI:");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");
let direccion = prompt("Ingrese su dirección:");
let ciudad = prompt("Ingrese su ciudad:");
let provincia = prompt("Ingrese su provincia:");
let pais = prompt("Ingrese su país:");


let mensajeDatos = `
Nombre: ${nombre}
Apellido: ${apellido}
Número de DNI: ${numeroDNI}
Fecha de Nacimiento: ${fechaNacimiento}
Dirección: ${direccion}
Ciudad: ${ciudad}
Provincia: ${provincia}
País: ${pais}
`;

alert(mensajeDatos);


let confirmacion = confirm("¿Los datos ingresados son correctos?");

if (confirmacion) {

    let dni = {
        Nombre: nombre,
        Apellido: apellido,
        "Número de DNI": numeroDNI,
        "Fecha de Nacimiento": fechaNacimiento,
        Dirección: direccion,
        Ciudad: ciudad,
        Provincia: provincia,
        País: pais
    };

    // Mostrar objeto DNI por consola
    console.table(dni);
    console.log("Registro exitoso.");
} else {
    alert("Vuelva a intentarlo en 1 mes.");
}