/*Ejercicio 20
    22. Realizar una página con un script que calcule el valor 
    de la letra de un número de DNI (Documento nacional de indentidad).
    El algoritmo para calcular la letra del dni es el siguiente:
    ●El número debe ser entre 0 y 99999999
    ●Debemos calcular el resto de la división entera entre el número y el número 23.
    ●Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
    (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
    ●Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
    ●Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

var dni;
var resto;
var continuar = true;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var letraAsignada;

while(continuar){

    dni = prompt("Ingrese su DNI");

    if(parseInt(dni) == dni){

        resto = dni % 23;

        for(var i = 0; i < 23; i++){

            if(resto == i){
                letraAsignada = letras[i];
            }
        }

        alert(`La letra asignada es la: ${letraAsignada}`)
    }
    else{

        if(dni != undefined){

            if(dni == "cancelar"){
                continuar = false;
            }
            else{
                alert(`${dni} no es un DNI válido`);
            }
        }
    }
}


