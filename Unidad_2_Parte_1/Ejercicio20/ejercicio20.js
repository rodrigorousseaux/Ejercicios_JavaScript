/*
    20.una función que se llame ultimoDiaDelMes que reciba díia,mes y año y devuelva el último día del mes
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

function ultimo(dia, mes, año){

    var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var ultimoDia;

    for(var i = 0; i < 12; i++){

        if((mes-1) == i){

            ultimoDia = diasDelMes[i];
            return ultimoDia;

        }
    }
}

var dia = parseInt(prompt("Ingrese el día: "));
var mes = parseInt(prompt("Ingrese el mes: "));
var año = parseInt(prompt("Ingrese el año: "));

ultimoDia = ultimo(dia, mes, año);

if(ultimoDia == 28){

    var bisiesto = esBisiesto(año);

    if(bisiesto){
        ultimoDia = 29;
    }
    else{
        ultimoDia = 28;
    }
}

document.write(`El ultimo dia del mes es el: ${ultimoDia}`)