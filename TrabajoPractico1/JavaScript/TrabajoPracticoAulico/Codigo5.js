

//EJERCICIO 5//

suma = 0

do {
    num = prompt(`Ingrese un numero`)

    if (!isNaN(num) && num != -1) {
        suma += Number(num);
    }


} while (num != -1)
console.log("La suma de los numeros ingresados es : " + suma)