//Crear una función de nombre validar que reciba una cadena, 
//chequear que la cadena comience con 2 números, luego siga 
//con cuatro letras mayúsculas y finalice con 1 número; si 
//la cadena es valida, es decir, cumple con ese patrón muestre
//un díalogo informando el éxito; caso contrario lance una 
//excepción y en el catch muestre el mensaje de fracaso.

let validar=function(cadena){
    try{
        var patron=/^\d{2}[A-Z]{4}\d$/
        if(patron.test(cadena)){
            console.log("EXITO");
        } else{
            throw new Error ("Fracaso");
        }
    }catch(error){
        console.log(error.message); //del objeto error mostra el mensaje
    }
   
}
var palabra =prompt("ingrese una cadena")
validar(palabra)