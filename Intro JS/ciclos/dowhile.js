var userInput;
var num=0;
var num1=0;
do{
    num= userInput=prompt("Ingrese un numero o escriba salir o terminar para finalizar el programa")
    num1=parseInt(num)
   if(! (userInput=="salir")){
    if(isNaN(num1)){
        alert("Ingrese un caracter NUMERICO");
    }else{
        alert("El numero ingresado es"+ num1);
    }
   } else{
       
   }
}while(!(userInput=="salir"))