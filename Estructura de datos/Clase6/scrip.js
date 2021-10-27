let numeros =[1, 4, 19, 12, 31, 32, -9, 40, 43, 65, 67,-4];



let arregloSort= numeros.sort(function(a, b){
    return b - a ;
});

//console.log(arregloSort);

let caracteres= ["b","h","w","e","a"]
let array= new Array(5)
for (let index = 0; index < caracteres.length; index++) {
    const element =caracteres[index];
    var tamaño=caracteres.length;
    let j=0;
    
    var i = element.charCodeAt(j);
    for (let dos = 0; dos < array.length; dos++) {
        array[dos] = i;
        
    }
    console.log(array);
    
}
  



 
