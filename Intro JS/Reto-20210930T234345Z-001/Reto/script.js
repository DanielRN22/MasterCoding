function registrarVehiculo(event){
    let tipo_vehiculo = prompt("Ingrese el tipo de vehiculo");
    let marca = prompt("Ingrese la marca de vehiculo");
    let modelo = prompt("Ingrese el modelo de vehiculo");
    let color = prompt("Ingrese el color de vehiculo");
    let tipo_combustion = prompt("Ingrese el tipo de combustion");
    let tipo_transmision=prompt("Ingrese el tipo de transmision");
    if(tipo_vehiculo.toLocaleLowerCase() == "motocicleta"){
        let tipo_motocicleta = prompt("Ingrese el tipo de motocicleta");
        let vh1 = new Motocicleta(color, marca, modelo, tipo_combustion, tipo_transmision, tipo_vehiculo);
        vh1.agregarMotocicleta(tipo_motocicleta);
    }
    if(tipo_vehiculo.toLocaleLowerCase() == "automovil"){
        let vh = new Vehiculo(color, marca, modelo, tipo_combustion, tipo_transmision, tipo_vehiculo);
        vh.agregarVehiculo();
    }

}   

let btnAgregar = document.getElementById("agregar");
console.log(btnAgregar);
if(btnAgregar){
    btnAgregar.addEventListener('click', registrarVehiculo, false);
}
