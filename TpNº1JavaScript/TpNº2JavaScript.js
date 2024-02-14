//EJERCICIO Nº2//
n = prompt('Vamos a armar un rectangulo. Ingrese un numero para la base ')
m = prompt('Ingrese un numero para la altura  ')
/*for (let i = 0; i < n; i++) {
    let n='';
    for (let j = 0; j < m; j++) {
        n+='* ';
        console.log('* ')
    }
       
       
        }

for (let i = 0; i < m; i++) {
      console.log('*');
    
    for(let j = 0; j < n; j++) {
      n='* ';
      console.log('* ');
    }
   
}


    for (let i = 0; i < m; i++) {
        let linea = " ";
        for (let j = 0; j < n; j++) {
            linea += "*";
        }
        console.log(linea);
        
    }*/

    function crearRectangulo(n, m) {
        let rectangulo = {
            ancho: n,
            alto: m,
            imprimir: function() {
                for (let i = 0; i < this.alto; i++) {
                    let linea = "";
                    for (let j = 0; j < this.ancho; j++) {
                        linea += "*";
                    }
                    console.log(linea);
                }
            }
        };
        return rectangulo;
    }
    crearRectangulo.imprimir();