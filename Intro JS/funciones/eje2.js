var dato=prompt("Ingrese un dato")

function comprobar(dato){
  if(isNaN(dato)==false){

        var tipo_dato= "Numerico";

    
  } else{
        var tipo_dato= typeof dato; 
  }
  return ("el dato que ingreso es de tipo" + tipo_dato);
}

alert(comprobar(dato));