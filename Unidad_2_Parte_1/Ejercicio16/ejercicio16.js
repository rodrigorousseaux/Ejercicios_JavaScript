/*
    16.Una función que reciba como parámetro un año y diga si ese 
    año es bisiesto (googlear cuando un año es bisiesto)
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

var año = parseInt(prompt("Ingrese el año"));

var bisiesto = esBisiesto(año);

if(bisiesto){
    document.write(`El año ${año} es bisiesto`);
}
else{
    document.write(`El año ${año} no es bisiesto`);
}