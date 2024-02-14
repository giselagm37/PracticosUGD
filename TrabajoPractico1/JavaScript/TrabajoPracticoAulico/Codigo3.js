//EJERCICIO 3//

let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese un numero"));
let num3 = parseFloat(prompt("Ingrese un numero"));
if (num1 > num2 && num1 > num3) {
    alert("Este numero es el mas grande " + num1);
} else if (num2 > num3 && num2 > num1) {
    alert("Este numero es el mas grande" + num2);
} else if (num3 > num2 && num3 > num1) {
    alert("Este numero es el mas grande" + num3);

} else {
    alert("Estos numeros son iguales");
}
