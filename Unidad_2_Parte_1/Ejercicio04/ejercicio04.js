/*
    4.Crear una función que lea notas hasta que ingrese  -1 y 
    devuelve el promedio de las notas leídas. ( aunque no se suele leer valores en una función)
*/

function ingresarNotas(){

    var continuar = true;
    var suma = 0;
    var promedio = 0;
    var i = 0;
    var cantNotas = 0;

    while(continuar){
        var nota = parseFloat(prompt(`Ingrese la nota ${i+1}`));

        if(nota == -1){
            continuar = false;
        }
        else{
            suma += nota;
            i++;
            cantNotas++;
        }
    }

    promedio = suma / cantNotas;

    return promedio;
}

var promedio = ingresarNotas();

document.write(`El promedio es: ${promedio}`);


