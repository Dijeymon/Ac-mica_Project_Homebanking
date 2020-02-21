//Declaración de variables
var nombreUsuario = "Anton Fejer";
var saldoCuenta = 10000;
var limiteExtraccion = 2000;
var dineroDepositado = 0;
var dineroExtraido = 0;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigo = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion(limite) {
    var limiteMax = parseInt(prompt("Ingrese el nuevo límite de extracción", limite));
    if (isNaN(limiteMax)) {
        alert("Operación cancelada");
        return false;
    } else if (limiteMax < 0) {
        alert("No se admiten valores negativos");
    } else {
        var nuevoLimite = limiteMax;
        alert("¡Su límite de extracción se ha actualizado!" + "\nLímite de extraccion anterior: $" + limiteExtraccion + "\nLímite de extracción actual: $" + nuevoLimite);
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
    }
}

function extraerDinero(cantidadExtraida) {
    var cant = parseInt(prompt("Ingrese el monto que desea extraer", cantidadExtraida));
    var saldoAnterior = saldoCuenta;
    if (isNaN(cant)) {
        alert("Operación cancelada")
        return false;
    } else {
        if (cant > saldoCuenta) {
            alert("El dinero que desea extraer supera su saldo actual: $" + saldoAnterior + "\nSaldo que desea: $" + cant + "\n¡EXTRACCIÓN DENEGADA!");
            restarDinero(0);
        } else if (cant > limiteExtraccion) {
            alert("El dinero que desea extraer supera su límite de extracción: $" + limiteExtraccion + "\nSaldo que desea: $" + cant + "\n¡EXTRACCIÓN DENEGADA!");
            restarDinero(0);
        } else if (cant % 100 != 0) {
            alert("Solo se pueden extraer billetes de $100(CIEN)" + "\n¡EXTRACCIÓN DENEGADA!");
            restarDinero(0);
        } else if (cant < 0) {
            alert("No se pueden extraer montos negativos");
            restarDinero(0);
        } else {
            restarDinero(cant);
            alert("Se han extraido de la cuenta: $" + cant + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }
    }
}

function depositarDinero(cantidadDepositada) {
    var cant = parseInt(prompt("Ingrese el monto que desea depositar", cantidadDepositada));
    if (isNaN(cant)) {
        alert("Operación cancelada");
        return false;
    } else if (cant < 0) {
        alert("No se pueden depositar montos negativos");
    } else {
        var saldoAnterior = saldoCuenta;
        sumarDinero(cant);
        actualizarSaldoEnPantalla();
        alert("Se han depositado en la cuenta: $" + cant + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta);
    }
}

function pagarServicio() {
    var servicio = parseInt(prompt("Ingrese el número que corresponda con el servicio que desea pagar" + "\n 1- Agua" + "\n 2- Internet" + "\n 3- Luz" + "\n 4- Teléfono"));
    if (isNaN(servicio)) {
        alert("Operación cancelada");
        return false;
    } else {

        switch (servicio) {
            case 1:
                if (saldoCuenta < agua) {
                    alert("No hay suficiente saldo en su cuenta para realizar el pago del servicio");
                } else {
                    var pagado = saldoCuenta - agua;
                    alert("Has abonado el servicio de agua" + "\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + agua + "\nSaldo actual: $" + pagado);
                    saldoCuenta = pagado;
                    actualizarSaldoEnPantalla();
                }
                break;
            case 2:
                if (saldoCuenta < internet) {
                    alert("No hay suficiente saldo en su cuenta para realizar el pago del servicio");
                } else {
                    var pagado = saldoCuenta - internet;
                    alert("Has abonado el servicio de internet" + "\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + internet + "\nSaldo actual: $" + pagado);
                    saldoCuenta = pagado;
                    actualizarSaldoEnPantalla();
                }
                break;
            case 3:
                if (saldoCuenta < luz) {
                    alert("No hay suficiente saldo en su cuenta para realizar el pago del servicio");
                } else {
                    var pagado = saldoCuenta - luz;
                    alert("Has abonado el servicio de luz" + "\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + luz + "\nSaldo actual: $" + pagado);
                    saldoCuenta = pagado;
                    actualizarSaldoEnPantalla();
                };
                break;
            case 4:
                if (saldoCuenta < telefono) {
                    alert("No hay suficiente saldo en su cuenta para realizar el pago del servicio");
                } else {
                    var pagado = saldoCuenta - telefono;
                    alert("Has abonado el servicio de teléfono" + "\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + telefono + "\nSaldo actual: $" + pagado);
                    saldoCuenta = pagado;
                    actualizarSaldoEnPantalla();
                };
                break;
            default:
                alert("No existe un servicio con referencia a ese número");
        }
    }
}

function transferirDinero(trasnferencia) {
    var monto = parseInt(prompt("Ingrese el monto que desea Transferir", trasnferencia));
    console.log(monto);
    if (saldoCuenta < monto) {
        alert("No dispone de ese monto para realizar la transferencia" + "\nDinero disponible: $" + saldoCuenta);
    } else if (monto < 0) {
        alert(`No se pueden transferir montos negativos`);
    } else if (isNaN(monto)) {
        alert("Operación cancelada");
        return false;
    } else {
        var numeroCuenta = parseInt(prompt("Ingrese el número de cuenta al cual desea realizar la transferencia"));
        console.log(numeroCuenta);
        if (isNaN(numeroCuenta)) {
            alert("Operación cancelada");
            return false;

        } else if (numeroCuenta != cuentaAmiga1 && numeroCuenta != cuentaAmiga2) {
            alert("Solo puede transferir dinero a las cuentas amigas" + "\nCuenta Amiga 1: " + cuentaAmiga1 + "\nCuentra amiga 2: " + cuentaAmiga2);
        } else {
            var realizarTransferencia = saldoCuenta - monto;
            alert("Se han transferido: $" + monto + "\nCuenta destino: " + numeroCuenta);
            saldoCuenta = realizarTransferencia;
            actualizarSaldoEnPantalla();
        }
    }
}

function iniciarSesion(password) {
    var contraseña = parseInt(prompt("Ingrese su clave de acceso:", password));
    if (contraseña != codigo) {
        alert("Ha ingresado una contraseña incorrecta" + "\nSu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta = 0;
        nombreUsuario = "";
        actualizarSaldoEnPantalla();
        cargarNombreEnPantalla();
    } else {
        alert(`Bienvenido/a ${nombreUsuario} ya puede comenzar a realizar operaciones en su cuenta`);
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}