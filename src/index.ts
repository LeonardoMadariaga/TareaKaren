/*let miArreglo: string [] = new Array (12);

miArreglo[0] = "Enero";
miArreglo[1] = "Febrero";
miArreglo[2] = "Marzo";
miArreglo[3] = "Abri";
miArreglo[4] = "Mayo";
miArreglo[5] = "Junio";
miArreglo[6] = "Julio";
miArreglo[7] = "Agosto";
miArreglo[8] = "Septiembre";
miArreglo[9] = "Octubre";
miArreglo[10] = "Noviembre";
miArreglo[11] = "Diciembre";

console.log(miArreglo); */

/*let num: number[] = new Array(7);

num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

let indice: number = 0;
while(indice < 7){
  console.log("El numero en la posicion "  
  + indice + " es " + num[indice]);

  indice++
}

/* for (let i:number = 0; i<7; i++){

}*/

//EJERCICIO PEDIR NUMEROS AL USUARIO

/*let numeroDeseadoArreglo : number[] = new Array(5);

let nro: number;
let indice: number;

for(indice = 0; indice < 5; indice++) {
  nro = prompt("Ingrese el numero que desea poner en la posicion ", indice );
  numeroDeseadoArreglo[indice] = nro;
}
 
for (indice = 0; indice < 5; indice++) {
  console.log(
    "El numero en la posicion" + indice + " es " + numeroDeseadoArreglo[indice]);
}
*/

//EJERCICIO DE NOMBRES INGRESADOS

/*let dimensionArreglo: number = Number(prompt("Ingrese la cantidad de nombres"));

let arregloNombres: string[] = new Array(dimensionArreglo);
let indice: number;

for(indice = 0; indice < dimensionArreglo; indice++){
  arregloNombres[indice] = prompt("Ingrese nombre para la posicion", indice);
}

for(indice = 0; indice < dimensionArreglo; indice++){
  console.log("El nombre en la posicion " + indice + " es " + arregloNombres[indice]);
}*/

//EJERCICIO CREAR DOS ARREGLOS

/*let arregloNumeros: number[] = new Array(3);
let arregloNombres: string[] = new Array(2);
let indice: number;

for(indice=0; indice < 3; indice++){
  arregloNumeros[indice] = Number(prompt("Ingrese un numero para la posicion"));
}
//con nombreDelArreglo.length podemos saber la longitud del arreglo
for(indice=0; indice < arregloNombres.length; indice++){
  arregloNombres[indice] = prompt("Ingrese nombre para la posicion" + indice);
}

for(indice=0; indice < 3; indice++){
  console.log("El numero en la posicion " + indice + " es " + arregloNumeros[indice]);
}

for(indice=0; indice < 2; indice++){
  console.log("El nombre en la posicion " + indice + " es " + arregloNombres[indice]);
}*/

//EJERCICIO SUMAR ELEMENTOS DE UN ARREGLO

/*let dimensionArreglo: number = Number(prompt("Ingrese longitud del arreglo"));

let arregloDeNumeros: number[] = new Array(dimensionArreglo);
let indice: number;
let sumaTotal: number = 0;

for(indice = 0; indice< dimensionArreglo; indice++){
  arregloDeNumeros[indice] = Number(prompt("Ingrese numero para la posicion " + indice));  
  sumaTotal += arregloDeNumeros[indice];
}

console.log("La suma de todos los elementos del arreglos es " + sumaTotal);*/

//EJERCICIO CREAR ARREGLO CON NUMEROS RANDOM
/*let indice: number;
let arregloRandom: number[] = new Array(10);

function Azar (tope: number): number{
         return Math.floor(Math.random()* tope);
}

for (indice=0; indice < 10; indice++){
  arregloRandom[indice] = Azar(100);
}

for (indice=0; indice < 10; indice++){
  console.log("El numero en la posicion " + indice + " es " + arregloRandom[indice]);
}*/

//sumaV[1] = v1[1] + v2[1]

//indice--
