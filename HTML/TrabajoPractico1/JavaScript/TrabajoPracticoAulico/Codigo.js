





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

let arr =[32,45,78,99,12,21];
let= nuevo=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0){
        nuevo.push(arr[i]);
    }
}
console.log('Arreglo nuevo con los multiplos de 3: '+nuevo);


