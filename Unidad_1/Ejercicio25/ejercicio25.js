/*Ejercicio 25
    25)Crea script para generar pirámide siguiente con los números 
    del 1 al número que indique el usuario (no mayor de 50) :*/

/*var continuar = true;
while(cotinuar){

    var num = parseInt(prompt("Ingrese un número"))

    if(num > 50){
        alert(`Solo puede ingresar números hasta el 50`)
    }
    else{
        continuar = false;
    }
}*/

var num = parseInt(prompt("Ingrese un número"));
while(num > 50){

    alert(`Solo puede ingresar números hasta el 50`)

    var num = parseInt(prompt("Ingrese un número"))
}

for(var i = 0; i < num; i++){

    for(var j = 0; j < i+1; j++){
    
        document.write(i+1);
    }
    document.write("<br/>")
}

