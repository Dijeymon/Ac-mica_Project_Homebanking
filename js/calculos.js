//funciones adicionales
function sumarDinero(monto){
    var cant = parseInt(monto);
    var dineroDepositado = saldoCuenta + cant;
    saldoCuenta = dineroDepositado;  
}

function restarDinero(monto){
    var cant = parseInt(monto);
    var dineroExtraido = saldoCuenta - cant;
    saldoCuenta = dineroExtraido;   
}


