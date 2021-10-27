class Vehiculo{
    constructor(color, marca, modelo, tipo_combustion, tipo_transmision, tipo_vehiculo){
        this.color = color,
        this.marca = marca,
        this.modelo = modelo,
        this.tipo_combustion = tipo_combustion,
        this.tipo_transmision = tipo_transmision,
        this.tipo_vehiculo = tipo_vehiculo
    }

    agregarVehiculo(){
        let html = "";
        html += "<tr>";
        html += "   <td>"+this.tipo_vehiculo+"</td>";
        html += "   <td>"+this.marca+"</td>";
        html += "   <td>"+this.modelo+"</td>";
        html += "   <td>"+this.color+"</td>";
        html += "   <td>"+this.tipo_combustion+"</td>";
        html += "   <td>"+this.tipo_transmision+"</td>";
        html += "</tr>";
        document.getElementById("vehiculos").insertAdjacentHTML('beforeend', html);
    }
}