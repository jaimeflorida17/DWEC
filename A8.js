    if(numero>=1 && numero<=12){
        const numero=(parseFloat(prompt("Dame un numero del 1 al 12")));
            
            function lanzar(){
    
                var dado=partseInt(12*Math.random()+1);

                    return dado;

            }

                    if(numero==dado){
                        alert("Felicidades has acertado el numero");
                    }else{
                        alert("Lastima, siga intentandolo");
                    }

        }else{
            alert("El numero introducido no es valido");

        }