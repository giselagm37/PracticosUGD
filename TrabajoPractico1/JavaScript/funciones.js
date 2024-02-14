
//FUNCIONES//
function algo(funcParam,dato){

    let res= funcParam(dato);
    console.log("Resultado "+res);
 }
 
 
 
 
 algo((a)=>{return a*2},90);

 function sumar(){

    let total=0;
    for(let i=0;i < arguments.length;i++){  //largo de la funcion

        total+=arguments[i];

    }
    return total;

}


let res=sumar(20,33,45,10);
console.log("resultado "+res);

//let arreglo=[12,3,9,8,2];
//console.log("ordenar "+arreglo.sort((a,b)=>b-a));//a-b ordena de mayor a menor

//ARRAY//
let lista=[];

lista[0]="uno";
lista[1]="dos";

//agregar al final
lista.push("ultimo");

//agregar adelante
lista.unshift("primero");


//eliminar el ultimo elemento
lista.pop();

//eliminar el primer elemento
lista.shift();

//clonar
let otraLista=lista.slice();

//concatenar (unir)
let diferente=["tres","cuatro"];

let otro=lista.concat(diferente);

//Cambiar elementos.
otro.fill("x",1,2);

//Obtener la posicion de un elemento.
let indice=otro.indexOf('cinco');
console.log("Posicion "+indice);

let arreglo=["b","a","c"];
console.log("ordenar "+arreglo.sort());

console.log(lista);
console.log(otraLista);
console.log(otro);

//OBJETOS//
let persona={

    nombre:"Juan",
    apellido:"Perez",
    edad:50,
    fechNac:new Date('1973-12-20'),
    
    mostrarInfo: function (){ console.log(this.nombre +" "+this.apellido+" "+this.edad); }


}

//DATE //
console.log("Edad "+persona.edad);
console.log("Edad "+persona['edad']);
persona.mostrarInfo();

let fecha=new Date(2024,1,9); // 9 DE FEBRERO // CUENTA 0(ENERO),1 (FEBRERO),2...

console.log(fecha);
console.log(fecha.getDate()); 
console.log(fecha.getDay());  //DOMINGO(0),LUNES(1)...
console.log(fecha.toDateString());
console.log(fecha.toISOString());
console.log(fecha.toLocaleDateString());

