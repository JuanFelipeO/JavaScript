var kilometros = prompt("Ingrese los kilometros recorridos:");
console.log("Kilometros recorridos: " + kilometros);

var consumo = prompt("Ingrese la cantidad de litros de conbutible consumido:");
console.log("Litros de combustible gastados: " + consumo);

var kms = parseInt(kilometros)
var cns = parseInt(consumo)

var cons_kms = (1*cns)/(kms);
console.log("El consumo de conbustible por kilometros es: " + cons_kms);