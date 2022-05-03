var txt = prompt("Ingrese un texto");
var nro_caracteres = txt.length;
var pmr_caracter = txt.charAt(0);
var nro = prompt("Ingresa un número postivo menor a: " + nro_caracteres);
var nro_int = parseInt(nro);
var caracter_posx = txt.charAt(nro_int);  

console.log("El texto que ingresaste es: " + txt);
console.log("El caracter en primer lugar es: " + pmr_caracter);
console.log("El carácter en esa posición es: " + caracter_posx);