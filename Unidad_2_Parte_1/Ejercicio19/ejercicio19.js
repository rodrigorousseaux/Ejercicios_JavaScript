/*
    19.una función que reciba dia,mes yaño y devuelva el dia anterior
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

function diaAnterior(dia, mes, año){

    return dia-1; 
}

var dia = parseInt(prompt("Ingrese el día: "));
var mes = parseInt(prompt("Ingrese el mes: "));
var año = parseInt(prompt("Ingrese el año: "));

anterior = diaAnterior(dia, mes, año);

if(anterior == 0 && mes == 0){
    anterior = 31;
    mes = 11;
    año -= 1;
}
else if(anterior == 0){
    anterior = 31;
    mes -= 1;
}
else if(anterior == 29 && mes == 2){

    var bisiesto = esBisiesto(año);

    if(bisiesto == false){
        anterior = 28;
    }
}

document.write(`El dia siguiente es: ${siguiente}/${mes}/${año}`)