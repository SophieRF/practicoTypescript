//Ejercicio 2
console.log("Ejercicio 2: corriendo desde TypeScript");

//Ejercicio 3
//Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
let stringValue: string = "Hola TypeScript!";
let numberValue: number = 32;
let BooleanValue: boolean = true;
let DateValue: Date = new Date(); 

document.getElementById('stringData')!.textContent = `Valor String: ${stringValue}`;
document.getElementById('numberData')!.textContent = `Valor Number: ${numberValue}`;
document.getElementById('booleanData')!.textContent = `Valor Boolean: ${BooleanValue}`;
document.getElementById('dateData')!.textContent = `Valor Date: ${DateValue}`;

//Ejercicio 4
//Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y devolver su representación en cadena.
let numero: number = 123;
function convertirEnCadena(unNumero: number): string{
    return unNumero.toString();
}
let numeroCadena: string = convertirEnCadena(123);
document.getElementById('numberToString')!.textContent = `Número convertido a cadena: ${numeroCadena}`;

//Ejercicio 5
//Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.

function sumarNumeros(numeros: number[]): number{
    let sumatoria: number = 0;
    for(let i = 0; i<numeros.length; i++){
        sumatoria += numeros[i]; 
    }
    return sumatoria;
}
let numeros: number[] = [12, 4, 5, 20, 3];
let resultadoSumatoria: number = sumarNumeros(numeros);
document.getElementById('sumaResultado')!.textContent = `Suma del array: ${resultadoSumatoria}`;

//Ejercicio 6
//Crea un objeto que representa a un estudiante con nombre, edad y curso. Muestra al estudiante y sus propiedades en el HTML.  El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
let estudiante = {
    nombre: 'Sofia',
    edad: 31,
    curso: 'Programación'
}

document.getElementById('infoEstudiante')!.innerHTML = `Nombre: ${estudiante.nombre}</br>Edad: ${estudiante.edad}</br>Curso: ${estudiante.curso}`;

//Ejercicio 7
//Define un “type” personalizado para representar una dirección con calle, ciudad y código postal. Usa este tipo para crear una dirección y muéstrala en el HTML. El tipo debe tener propiedades para calle, ciudad y código postal.
type Direccion = {
    calle: string;
    ciudad: string;
    cp: number;
}
let Direccion1: Direccion = {
    calle: 'Una Calle',
    ciudad:'Una Ciudad',
    cp: 12312
}
document.getElementById('infoDireccion')!.textContent = `Dirección: Calle: ${Direccion1.calle}, Ciudad: ${Direccion1.ciudad}, Código postal:
${Direccion1.cp}`;

//Ejercicio 8
//Define una interfaz para un usuario que tenga nombre, correo y un método para saludar. Implementa esta interfaz en un objeto y muestra el saludo en el HTML. La interfaz debe definir propiedades para nombre, correo y un método que devuelva un saludo
interface Usuario{
    nombre:string;
    correo:string;
}
function saludar(usuario: Usuario){
    return`Hola! Mi nombre es ${usuario.nombre}`;
}
let usuario1: Usuario = {
    nombre: 'Juan',
    correo: 'unCorreo@gmail.com'
}
document.getElementById('infoUsuario')!.innerText = saludar(usuario1);


//Ejercicio 9
//Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML. La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona{
    nombre: string;
    edad: number;
    presentarse(){
        return (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
    constructor(nombre:string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    };
}
const persona1 = new Persona('Ana', 29);
document.getElementById('infoPersona')!.innerText = persona1.presentarse();

//Ejercicio 10
//Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML. La clase debe permitir almacenar y obtener un valor de cualquier tipo.
class Caja<T>{
    private valorGenerico: T;
    constructor(valorGenerico: T){
        this.valorGenerico = valorGenerico;
    }
    setValorGenerico(valorGenerico: T){
        this.valorGenerico = valorGenerico;
    }
    getValorGenerico(){
        return this.valorGenerico;
    }
}
const cajaConTexto = new Caja<string>('Valor de tipo texto');
const cajaConNumero = new Caja<number>(321);
document.getElementById('infoCaja')!.innerText = cajaConTexto.getValorGenerico();

//Ejercicio 11
//Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML. La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.
function identidad<T>(valor: T): T {
    return valor;
}

const numeroIdentidad = identidad<number>(123);
const textoIdentidad = identidad<string>('Hola, mundo');
const booleanoIdentidad = identidad<boolean>(true);

document.getElementById('infoIdentidadNumero')!.innerText = `Número: ${numeroIdentidad}`;
document.getElementById('infoIdentidadTexto')!.innerText = `Texto: ${textoIdentidad}`;
document.getElementById('infoIdentidadBooleano')!.innerText = `Booleano: ${booleanoIdentidad}`;

//Ejercicio 12
//Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito a una variable y muéstralo en el HTML. La enumeración debe incluir al menos tres colores diferentes.
enum Color {
    Rojo = "Rojo",
    Verde = "Amarillo",
    Azul = "Azul"
}

const colorFavorito: Color = Color.Verde;

document.getElementById('infoColorFavorito')!.innerText = `Color favorito: ${colorFavorito}`;
