
var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];

for (var item of lista) {
    // Verificar si el elemento no es un número del 1 al 9
    if (!(item >= '1' && item <= '9')) {
        console.log(item);
    }
}
/*var lista = new Array ('a', 'b', 'c', '1', 'x', '9', 'd', '4');
var item;
for (item in lista) {
    if (lista[item] == "1" || lista[item] == "9") {
        break;
    }
    console.log(lista[item]);
}*/