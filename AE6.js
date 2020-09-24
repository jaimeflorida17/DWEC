const numero=(prompt("Introduce un numero valido"));

    if(numero %1 == 0){
            if(numero %2 == 0){
                alert("El numero introducido es PAR");
            }else{
                 alert("El numero introducido es IMPAR");
            
            }
    }else{
        alert("Este numero no es valido, es un numero decimal");
    }