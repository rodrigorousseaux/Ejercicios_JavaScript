/*
    Funciones Fecha:
    15.una función que dado un número de mes y me devuelva la cantidad 
    de días de ese mes(suponiendo que no es un año bisiesto)
*/

function diasDelMes(mes){

    var dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return dias[mes];
}

var mes = parseInt(prompt("Ingrese el número del mes"));

var cantDias = diasDelMes(mes-1);

document.write(`El mes ${mes} tiene ${cantDias} días`);