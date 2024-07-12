/*
1. Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
*/

//Peso en kilogramos [kg]
//Altura en metros [m]

function IMC(altura, peso)
{
    return peso/Math.pow(altura,2); 
}

function calcular()
{
    let altura = parseFloat(document.getElementById('inpAltura').value);
    let peso = parseFloat(document.getElementById('inpPeso').value);

    if(peso!=0)
    {
        let indiceMasaMuscular = IMC(altura,peso);
        let condicion = "";

        if(indiceMasaMuscular>35)
            {
                condicion = "Obesidad Morbida";
            }
            else if(indiceMasaMuscular>30 && indiceMasaMuscular<34.90)
            {
                condicion = "Obesidad";
            }
            else if(indiceMasaMuscular>25 && indiceMasaMuscular<29.90)
                {
                    condicion = "Sobrepeso";
                }
                else if(indiceMasaMuscular>18.50 && indiceMasaMuscular<24.90)
                    {
                        condicion = "Normopeso";
                    }    
                    else//IMC<=18.50
                    {
                        condicion = "Peso insuficiente";
                    }        

                    document.querySelector('#resultado').innerHTML = `Usted posee un IMC de ${Number.parseFloat(indiceMasaMuscular).toFixed(2)} y estado nutricional con ${condicion}`;
    }else
    {
        alert('Peso debe ser distinto a cero');
    }        
        
}

// console.log(`Usted posee un IMC de ${Number.parseFloat(indiceMasaMuscular).toFixed(2)} y estado nutricional con ${condicion}`);
// console.log("altura: " + altura);
// console.log("peso: " + peso);
// console.log("IMC: " + Number.parseFloat(indiceMasaMuscular).toFixed(2));


//let altura = parseFloat(prompt("Introduzca su altura [m]"));
//let peso =  parseFloat(prompt("Introduzca su peso [kg]"));
