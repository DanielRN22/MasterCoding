var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];
var bandera = true; //se inicializa bandera para el bucle que reperita hasta que la contraseña este correcta.
var item; // variable para acceder al objeto del arreglo
//var button = document.getElementById("verificar");
//button.addEventListener("click", verCuenta, true);
function verCuenta() {
    console.log("Estoy entrando");

    do {
        console.log("Estoy entrando");
        var nomCuenta = prompt("Ingrese su nombre de cuenta");
        var contraseña = prompt("Ingrese su contraseña");
        //var nomCuenta = document.getElementById("nombrecuenta").value;
        //var contraseña = document.getElementById("contraseña").value;

        for (let index = 0; index < cuentas.length; index++) {
            const element = cuentas[index];
            item = index;

            if (nomCuenta == element.nombre && contraseña == element.password) {

                alert("Cuenta verificada");
                selOpcion();
                bandera = false;


            }


        }
        if (bandera) {
            alert("Contraseña incorrecta");
        }

    }
    while (bandera)
}
verCuenta();

var valorRetiro = 0;
var valorDeposito = 0;
var saldo = 0;
function selOpcion() {
    alert("Que desea realizar: Un retiro, consular saldo o un ingresar monto?")
    var opc = prompt("Escriba la opcion:");
    if (opc == "consultar saldo") {
        verSaldo(item);
    } else if (opc == "retiro") {
        reaRetiro(item);
    } else if (opc == "ingresar monto") {
        deposito(item);
    } else {

    }

}

function verSaldo(item) {
    alert("Su saldo actual es:" + cuentas[item].saldo);
    verCuenta();
}

function reaRetiro(item) {
    valorRetiro = parseFloat(prompt("Ingrese el valor a retirar"));
    if ((cuentas[item].saldo - valorRetiro) < 10) {
        alert("No es posible realizar la operacion, debido a que su cuenta no puede quedar con un saldo inferiro a 10 $");
        verCuenta();
    } else {
        saldo = cuentas[item].saldo - valorRetiro;
        alert("El saldo que desea retirar es: " + valorRetiro);
        alert("Su saldo acutal es: " + saldo);
        verCuenta();
    }
}

function deposito(item) {
    valorDeposito = parseFloat(prompt("Ingrese el saldo a depositar"));
    if ((cuentas[item].saldo + valorDeposito) > 990) {
        alert("Transacion rechazada: Su saldo total no puede ser superior a 990");
        verCuenta();

    } else {
        saldo = cuentas[item].saldo + valorDeposito;
        alert("El valor a ingresar es de: " + valorDeposito);
        alert("Su nuevo saldo es:" + saldo);
        cuentas[item].saldo = saldo;
        verCuenta();

    }
}

function funcion_reiniciar(){
    document.getElementById("id_formulario").reset();
    }


