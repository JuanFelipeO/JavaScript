var numero1 = prompt ("Ingrese el primer número");
var numero2 = prompt ("Ingrese el segundo número");
var numero3 = prompt ("Ingrese el tercer número");

var num1 = parseFloat(numero1);
var num2 = parseFloat(numero2);
var num3 = parseFloat(numero3);

var promedio = (num1+num2+num3)/3;

console.log ("Primer número: " + numero1);
console.log ("Segundo número: " + numero2);
console.log ("Tercer número: " + numero3);
console.log ("El promedio es: " + promedio);