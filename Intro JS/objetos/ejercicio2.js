var datos={
    nombre:"Daniel",
    apellido:"Rios",
    edad:"26",
    estatura:"1.70cm",
    peso:"75kg",
    pais:"Colombia",
    ciudad:"cali",
    ocupacion:"Estudiante",
    correo:"daniel.rios@gmail.com",
    direccion:"calle5# 66-83"
};

function MostrarDatos(objeto){
    document.write("Nombre:"+objeto.nombre+ "<br/>");
    document.write("apellido:"+objeto.apellido+ "<br/>");
    document.write("edad:"+objeto.edad+ "<br/>");
    document.write("estatura:"+objeto.estatura+ "<br/>");
    document.write("peso:"+objeto.peso+ "<br/>");
    document.write("pais:"+objeto.pais+ "<br/>");
    document.write("ciudad:"+objeto.ciudad+ "<br/>");
    document.write("ocupaciom:"+objeto.ocupacion+ "<br/>");
    document.write("correro:"+objeto.correo+ "<br/>");
    document.write("direccion:"+objeto.direccion+ "<br/>");
}
MostrarDatos(datos);



