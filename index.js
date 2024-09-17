"use strict";
//Ejercicio 2
console.log("Ejercicio 2: corriendo desde TypeScript");
//Ejercicio 3
//Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
let stringValue = "Hola TypeScript!";
let numberValue = 32;
let BooleanValue = true;
let DateValue = new Date();
const stringElement = document.getElementById('stringData');
const numberElement = document.getElementById('numberData');
const booleanElement = document.getElementById('booleanData');
const dateElement = document.getElementById('dateData');
if (stringElement)
    stringElement.textContent = `Valor String: ${stringValue}`;
if (numberElement)
    numberElement.textContent = `Valor Number: ${numberValue}`;
if (booleanElement)
    booleanElement.textContent = `Valor Boolean: ${BooleanValue}`;
if (dateElement)
    dateElement.textContent = `Valor Date: ${DateValue}`;
//Ejercicio 4
//Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y devolver su representación en cadena.
let numero = 123;
function convertirEnCadena(unNumero) {
    return unNumero.toString();
}
let numeroCadena = convertirEnCadena(123);
const numberToString = document.getElementById('numberToString');
if (numberToString)
    numberToString.textContent = `Número convertido a cadena: ${numeroCadena}`;
//Ejercicio 5
//Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.
function sumarNumeros(numeros) {
    let sumatoria = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumatoria += numeros[i];
    }
    return sumatoria;
}
let numeros = [12, 4, 5, 20, 3];
let resultadoSumatoria = sumarNumeros(numeros);
const sumaResultado = document.getElementById('sumaResultado');
if (sumaResultado)
    sumaResultado.textContent = `Suma del array: ${resultadoSumatoria}`;
//Ejercicio 6
//Crea un objeto que representa a un estudiante con nombre, edad y curso. Muestra al estudiante y sus propiedades en el HTML.  El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
let estudiante = {
    nombre: 'Sofia',
    edad: 31,
    curso: 'Programación'
};
let unEstudiante = document.getElementById('infoEstudiante');
if (unEstudiante)
    unEstudiante.innerHTML = `Nombre: ${estudiante.nombre}</br>Edad: ${estudiante.edad}</br>Curso: ${estudiante.curso}`;
let Direccion1 = {
    calle: 'Una Calle',
    ciudad: 'Una Ciudad',
    cp: 12312
};
let unaDireccion = document.getElementById('infoDireccion');
if (unaDireccion)
    unaDireccion.textContent = `Dirección: Calle: ${Direccion1.calle}, Ciudad: ${Direccion1.ciudad}, Código postal:
${Direccion1.cp}`;
let usuario1 = {
    nombre: 'Juan',
    correo: 'unCorreo@gmail.com'
};
function saludar(usuario) {
    return `Hola! Mi nombre es ${usuario.nombre}`;
}
let infoUsuario = document.getElementById('infoUsuario');
if (infoUsuario)
    infoUsuario.textContent = saludar(usuario1);
//Ejercicio 9
//Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML. La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona {
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    ;
}
let persona1 = new Persona('Ana', 29);
let infoPersona = document.getElementById('infoPersona');
if (infoUsuario)
    infoUsuario.textContent = persona1.presentarse;
