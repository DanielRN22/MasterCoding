function ObtenerMarcador(partido1, partido2){
    let total = 9;
    console.log(total);
    function Agregar(){
        if(isNaN(partido1) == false && isNaN(partido2) == false){
            total = partido1 + partido2;
            nombre = "sensei vega";
        } else {
            alert("Ingresa unicamente numeros!");
        }
        return total;
    }
    
    return "El resultado es: " + Agregar();
}

console.log(ObtenerMarcador(10,4));


// function agregarCuadrado(a,b){
//     function cuadrado(x){
//         return x * x;
//     }
//     return cuadrado(a) + cuadrado(b);
// }

// const resultado = agregarCuadrado(2, 3);
// resultado = resultado + 10;

// console.log(agregarCuadrado(2, 3));
// console.log(agregarCuadrado(3, 4));
// console.log(agregarCuadrado(4, 5));
// console.log(resultado);
