// variable declaracion y asignacion
var edad=7;
let edad2= 3;
const VALOR = 2;

//operaciones matemáticas basicas.
let suma = edad + edad2; //10
let resta = edad - edad2; //4
let multiplicacion = edad * edad2; //21
let division = edad / VALOR; //3.5

//Variables de Datos Personales.
let nombre= "Juan";
let apellido = "Silva"
let nombreCompleto = nombre +" "+ apellido; //Juan Silva

//salida de datos o mensajes
console.log("Bienvenidos a mi Sitio Web: Pregúntale a Juancito");
console.log("La suma de las edades es:" + suma);
console.log("La resta de las edades es:" + resta);
console.log("La multiplicacion de las edades es:" + multiplicacion);
console.log("La división de las edades es:" + division);
console.log("El nombre completo del usuario es:" + nombreCompleto);

alert("Hola, Bienvenidos a mi WebSite: Pregúntale a Juancito.");

//entrada de datos
let nombreIngresado = prompt ("¿Cómo te llamas?");
alert("Un Gusto Saludarte: " + nombreIngresado);
let edadIngresado = prompt ("¿Cuántos años tienes?");
alert("Genial, tienes: " + edadIngresado + " años");



let numeroIngresado = parseInt(prompt("Ingresa un Número para saber su Porcentaje de Impuesto en Perú:"));//hay que parsearlo
let impuestoNumero=numeroIngresado * 0.18;
console.log("El Porcentaje de Impuesto es: " + impuestoNumero);
alert("Tu porcentaje de Impuesto en Perú es: " + impuestoNumero);









