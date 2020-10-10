/*
    17.una función que reciba el dia, mes y año y me devuelva la cantidad de días de ese mes
*/

function esBisiesto(año){

    if(año % 4 == 0){

        var bisiesto = true; //Si es divisible por 4 es bisiesto

        if(año % 100 == 0){ //Si además es divisible por 100 si o si tiene que ser divisible por 400 para ser bisiesto

            if(año % 400 == 0){ 
                bisiesto = true //Si además de ser divisible por 100 es divisible por 400 es bisiesto
            }
            else{
                bisiesto = false; //Sino no es bisiesto
            }
            
        }
    }

    return bisiesto;
}

function diasDelMes(dia, mes, año){

    var dias;
    var bisiesto = esBisiesto(año);
    var cantDias = 0;

    for(var i = 0; i < 12; i++){

        if(bisiesto){
            dias = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }
        else{
            dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }

        if(i == (mes-1)){
            cantDias = dias[i];
            return cantDias;
        }
    }
}

var dia = parseInt(prompt("Ingrese el día"));
var mes = parseInt(prompt("Ingrese el mes"));
var año = parseInt(prompt("Ingrese el año"));

var cantDias = diasDelMes(dia, mes, año);

document.write(`El mes ${mes} del año ${año} tiene ${cantDias} días`)