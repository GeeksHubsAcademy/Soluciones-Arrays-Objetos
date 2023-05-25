// // ARRAYS

// // Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array y lo saque por consola.

// let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// let obtainLength = (array) => {
//   return array.length;
// };

// console.log(obtainLength(letters));

// let randomItem = (array) => {
//   return array[Math.floor(Math.random() * array.length)];
// };

// console.log(randomItem(letters));

// // Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que los liste y los saque por consola.

// let planetas = [
//   "Mercurio",
//   "Venus",
//   "Tierra",
//   "Marte",
//   "Jupiter",
//   "Saturno",
//   "Urano",
//   "Neptuno",
// ];

// planetas.map((planeta) => console.log(planeta));

// // Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos elementos. Obtén el índice del elemento "Funciones".

// javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

// javascript1.push("Elemento Adicional");

// console.log(javascript1);

// javascript1.shift();

// console.log(javascript1);

// javascript1.unshift("DOM2");

// console.log(javascript1);

// console.log(javascript1.slice(1, 2));

// console.log(javascript1);

// let arraycopiado = javascript1.map((cosa) => cosa + "cosa");

// console.log(javascript1);
// console.log(arraycopiado);

// // Crea una string, pásala a array y saca por consola la versión invertida de la original. Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// let string1 = "Hola";

// let arrayString = Array.from(string1);
// let arrayReversed = arrayString.reverse();
// let stringReversed = arrayReversed.join("");
// console.log(stringReversed);

// // Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

// let arrayUno = [1, 2, 3];
// let arrayDos = [4, 5, 6];
// let arrayMix = [];

// let evenlyMix = (array1, array2) => {
//   for (let i = 0; i < array1.length; i++) {
//     arrayMix.push(array1[i]);
//     array1.unshift();
//     arrayMix.push(array2[i]);
//     array2.unshift();
//   }
//   console.log(arrayMix);
// };

// evenlyMix(arrayUno, arrayDos);

// // Crea un array con al menos 10 números y una función que los divida en otros dos arrays: uno para pares y otro para impares. A continuación, saca por consola ambos arrays resultantes concatenados.

// let evens = [];
// let odds = [];

// const splitOddEvens = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evens.push(array[i]);
//     } else {
//       odds.push(array[i]);
//     }
//   }

//   console.log(evens.concat(odds));
// };

// splitOddEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // Utilizando el array del ejercicio anterior, crea una función que saque por consola únicamente los números mayores que 5.

// arrayFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arrayFilter.filter((number) => number > 5));

// // Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 = ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento y lo saque por consola.

// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
// let javascript2 = ["Objetos", "Arrays", "DOM"];

// let checkRepeats = (array1, array2) => {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         console.log(array1[i]);
//       }
//     }
//   }
// };

// checkRepeats(javascript1, javascript2);

// // Imagina que estamos en una carrera y los nombres de las personas que van llegando a la meta se van almacenando en un array (el primero quedaría en la primera posición del array, el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres. Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador, al segundo y al resto de competidores por separado.

// const nombres = ["Mara", "David", "Dani", "Jose", "Jorge"];

// const [primero, segundo, ...resto] = nombres;

// console.log(resto);

// // OBJETOS

// //Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad, dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el nombre completo (nombre y apellidos) de la persona a modo de string.

// const persona = {
//   nombre: "Mara",
//   apellido: "Scampini",
//   edad: 30,
//   ciudad: "Valencia",
//   pais: "España",
// };

// let concatenar = (objeto) => {
//   console.log(objeto.nombre + " " + objeto.apellido);
// };

// concatenar(persona);

// // Utiliza el objeto del ejercicio anterior y mediante desestructuración accede a únicamente a tres de esas propiedades.

// const persona = {
//   nombre: "Mara",
//   apellido: "Scampini",
//   edad: 30,
//   ciudad: "Valencia",
//   pais: "España",
// };

// const { nombre, edad, ciudad } = persona;

// // Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos tres) y distintos valores. Crea una función que saque por consola el valor de una de las propiedades para todos los objetos.

// const personas = [
//   {
//     nombre: "Mara",
//     apellido: "Scampini",
//     edad: 30,
//     ciudad: "Valencia",
//     pais: "España",
//   },
//   {
//     nombre: "Berto",
//     apellido: "Cervera",
//     edad: 35,
//     ciudad: "Alicante",
//     pais: "España",
//   },
//   {
//     nombre: "David",
//     apellido: "Ochando",
//     edad: 10,
//     ciudad: "Castellón",
//     pais: "España",
//   },
// ];

// console.log(personas.map((persona) => persona.edad));

// Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola el nombre, el tiempo y una lista de los ingredientes.

// const recipe = {
//   nombre: "Macarrones con tomate",
//   tiempo: 45,
//   ingredientes: ["Macarrones", "Tomate frito", "Carne picada", "Cebolla"],
// };

// const displayRecipe = (object) => {
//   console.log(object.nombre);
//   console.log(`Tiempo de preparación: ${object.tiempo}`);
//   console.log("Ingredientes:");
//   object.ingredientes.map((ingrediente) => console.log(ingrediente));
// };

// displayRecipe(recipe);

// Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y saca por consola todas las recetas de tu array.

// const recipes = [
//   {
//     nombre: "Macarrones con tomate",
//     tiempo: 45,
//     ingredientes: ["Macarrones", "Tomate frito", "Carne picada", "Cebolla"],
//   },
//   {
//     nombre: "Espaguetis carbonara",
//     tiempo: 50,
//     ingredientes: ["Espaguetis", "Huevo", "Guanciale", "Pecorino"],
//   },
//   {
//     nombre: "Macarrones al pesto",
//     tiempo: 30,
//     ingredientes: ["Macarrones", "Pesto", "Pechuga de pollo"],
//   },
// ];

// const displayRecipe = (object) => {
//   console.log(object.nombre);
//   console.log(`Tiempo de preparación: ${object.tiempo}`);
//   console.log("Ingredientes:");
//   object.ingredientes.map((ingrediente) => console.log(ingrediente));
// };

// recipes.map((recipe) => displayRecipe(recipe));

// Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio anterior para sacarlas por consola.

class Receta {
  constructor(nombre, tiempo, ingredientes) {
    (this.nombre = nombre),
      (this.tiempo = tiempo),
      (this.ingredientes = ingredientes);
  }

  displayRecipe() {
    console.log(this.nombre);
    console.log(`Tiempo de preparación: ${this.tiempo}`);
    console.log("Ingredientes:");
    this.ingredientes.map((ingrediente) => console.log(ingrediente));
  }
}

const receta1 = new Receta("Macarrones con tomate", 50, [
  "Macarrones",
  "Tomate frito",
  "Carne picada",
  "Cebolla",
]);

const receta2 = new Receta("Espaguetis carbonara", 45, [
  "Espaguetis",
  "Huevo",
  "Guanciale",
  "Pecorino",
]);

const receta3 = new Receta("Macarrones al pesto", 30, [
  "Macarrones",
  "Pesto",
  "Pechuga de pollo",
]);

let recetas = [];

const pushIntoArray = (array, ...args) => {
  args.map((arg) => array.push(arg));
};

pushIntoArray(recetas, receta1, receta2, receta3);

console.log(recetas);

recetas.map((receta) => receta.displayRecipe());
