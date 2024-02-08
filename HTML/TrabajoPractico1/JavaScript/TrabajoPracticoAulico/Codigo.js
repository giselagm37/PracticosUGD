//EJERCICIO 1//

promedio = 0;
for (let i = 1; i <= 3; i++) {
    let numero = parseFloat(prompt("Ingrese el numero " + i + " : "));
    suma += numero;
}
promedio = suma / 3;
console.log(promedio);

//EJERCICIO 2//

let text = prompt('Ingrese un texto')
let largo = text.length;
let mayuscula = text.toUpperCase();
console.log('La Cantidad de mayusculas del texto es : ' + largo);
console.log('El texto en mayusculas se ve asi : ' + mayuscula);

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





//EJERCICIO 4//

let num = prompt("Ingrese un numero");
num = Number(num);

if (num % 2 == 0) {
    console.log("El numero ingresado es par");

} else {
    console.log("El numero ingresado es impar");
}

//EJERCICIO 5//

suma = 0

do {
    num = prompt(`Ingrese un numero`)

    if (!isNaN(num) && num != -1) {
        suma += Number(num);
    }


} while (num != -1)
console.log("La suma de los numeros ingresados es : " + suma)

//EJERCICIO 6//

let arr = [32, 45, 78, 99, 12, 21];
let = nuevo = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        nuevo.push(arr[i]);
    }
}
console.log('Arreglo nuevo con los multiplos de 3: ' + nuevo);


