/*
    1.Realizar una función, a la que se le pase como parámetro un número N, 
    y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”
*/

function mostrarMensaje(numero){

    for(var i = 0; i < numero; i++){
        document.write("Bienvenidos al curso Full Stack <br/>")
    }  
}

var numero = parseInt(prompt("Ingrese un numero"));

mostrarMensaje(numero);


