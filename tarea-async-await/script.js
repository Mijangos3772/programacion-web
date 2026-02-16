
async function ejercicio1() {

    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    document.getElementById("text-id").innerHTML = "Esperando 2 segundos...";

    await esperar(2000);

    document.getElementById("text-id").innerHTML = "Terminado ✅";
}




async function ejercicio2() {

    const contenedor = document.getElementById("text-id2");
    contenedor.innerHTML = "Consultando clima en tiempo real...<br>";

    try {
        // Coordenadas de Ciudad de México
        const respuesta = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=19.43&longitude=-99.13&current_weather=true"
        );

        const datos = await respuesta.json();

        console.log(datos);

        contenedor.innerHTML += `
             Temperatura actual: ${datos.current_weather.temperature} °C <br>
             Velocidad del viento: ${datos.current_weather.windspeed} km/h <br>
             Hora del reporte: ${datos.current_weather.time}
        `;

    } catch (error) {
        console.error(error);
        contenedor.innerHTML = "Error al consultar el clima";
    }
}
