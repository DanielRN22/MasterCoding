let numeros=[5,5,10,10,20,20,30];
let totalSuma=0;
function suma(numeros){
    for(var index=0; index<numeros.length; index++){
        totalSuma+=numeros[index];
    }
    return totalSuma;
}
alert(suma(numeros));