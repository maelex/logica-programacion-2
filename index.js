/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
*/ 
//console.log("Bienvenido al convertidor de Temperatura");
//console.log("Esta aplicación puede convertir de grados Celsius a grados Fahrenheit y Kelvin");
//console.log("Ingrese la cantidad de grados Celsius a convertir: \n");

function convertCelsius(){
    const inCelcius = document.getElementById('txtTemperatura').value;
    const valCelsius = Number(inCelcius); // Convertir a number
    const spanF = document.getElementById('viewFahrenheit');
    const spanK = document.getElementById('viewKelvin');

    if (!isNaN(valCelsius) && inCelcius.trim() !== '') { // validando la entrada de datos
        // C -> Fahrenheit
        const gradosF = (valCelsius * 9/5) + 32;
        console.log("Grados Fahrenheit: ", gradosF);
        spanF.textContent = 'Grados Fahrenheit: '+ gradosF;

        // C -> kelvin
        const kelvin = 273.15;
        const gradosK = valCelsius + kelvin;
        spanK.textContent = 'Grados Kelvin: ' + gradosK;
        console.log("Grados kelvin: ", gradosK);

        document.getElementById('txtTemperatura').value = '';
    }else {
        alert("El tipo de dato ingresado no coincide");
        document.getElementById('txtTemperatura').value = '';
        document.getElementById('viewFahrenheit').textContent = '';
        document.getElementById('viewKelvin').textContent = '';
    }

}
