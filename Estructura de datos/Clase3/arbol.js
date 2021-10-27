let Cadenahotel={
    hoteles:{
        hotelArawa:[
            {
                ciudad:"Lima",
                calificacion:"5 estrellas",
                numeroDeTrabajadores:500,
                numeroDeParqueaderos:60,
                NumeroDeHabitaciones:{
                    Sencillas:15,
                    familiares:5,
                    Dobles:16,
                    Suits:{
                        conPiscina:2,
                        sinPiscina:6,
                        vistaAlmar:1
                    }   
                }
            }
        ],
        hotelIbis:[
            {
                ciudad:"Cartagena",
                calificacion:"5 estrellas",
                TipoHabitaciones:{
                    familiares:9,
                    Suits:{
                        conPiscina:3,
                        sinPiscina:2,
                        vistaAlmar:6
                    },
                    Sencillas:22,
                    Dobles:22,
                },
                numeroDeTrabajadores:200,
                numeroDeParqueaderos:30,
                


            }
        ]
    }



};
let propiedades = obtenerPropiedades(hotles[0]);
console.log(propiedades);

function obtenerPropiedades(objeto){
    return Object.keys(objeto);
}

accederApropiedades(personas[0], propiedades);

function accederApropiedades(objeto, propiedades){
    let acceder = prompt("En el niveal actual existen las siguentes propiedades. \n"+propiedades.toString().replace(/,/g, "\n") + "\nDigita a cual quieres acceder!");
    if(typeof objeto[acceder] == "object"){
        let propiedadesInternas = obtenerPropiedades(objeto[acceder]);
        accederApropiedades(objeto[acceder], propiedadesInternas);
    }
    else{
        alert("Su valor es:" + objeto[acceder]);
    }
}

