
var userInput;
while(!(userInput=="domingo")){
    userInput=prompt("Ingrese un dia de la semana");
    if(userInput=="lunes" ){
        alert("Que tengas un buen inicio de semana");
    }else if(userInput=="martes"){
        alert("No te rindas");
    }else if(userInput=="miercoles"){
        alert("Si se puede");
    }else if(userInput=="jueves"){
        alert("Ya casi termines");
    }else if(userInput=="viernes"){
        alert("Te falta muy poco");
    }else if(userInput=="sabado"){
        alert("Lo lograste");
    }else{
        alert("Ve a descarsar")
    }
}