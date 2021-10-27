function cemaforo(color){
    if(color=="Rojo"){
        var cambioColor="Verde";
    }else if(color=="Amarillo"){
        var cambioColor="Rojo";
    }else if(color=="verde"){
        var cambioColor="Amarillo";
    }
    return cambioColor;
}
alert(cemaforo("Amarillo"))