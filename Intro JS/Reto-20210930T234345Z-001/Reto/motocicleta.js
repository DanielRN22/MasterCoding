class Motocicleta extends Vehiculo{
    agregarMotocicleta(tipo_motocicleta){
        let html = "";
        html += "<tr>";
        html += "   <td>"+this.tipo_vehiculo+"</td>";
        html += "   <td>"+this.marca+"</td>";
        html += "   <td>"+this.modelo+"</td>";
        html += "   <td>"+this.color+"</td>";
        html += "   <td>"+this.tipo_combustion+"</td>";
        html += "   <td>"+this.tipo_transmision+"</td>";
        html += "   <td>"+tipo_motocicleta+"</td>";
        html += "</tr>";
        document.getElementById("vehiculos").insertAdjacentHTML('beforeend', html);
    }
}