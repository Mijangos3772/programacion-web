const esperar = (ms) => {
  return new promise(resolve => {
    settimeout(() => {
      resolve("Mensaje timeout tarde llego (2 segundos despues)");
    }, ms);
  });
};

const ejercicio1 = async () => {

  const contenedor = document.getElementById("text-id");

  contenedor.innerHTML = "Iniciando programa...<br>";
  contenedor.innerHTML += "Fin programa...<br>";

  const mensaje = await esperar(2000);

  contenedor.innerHTML += mensaje;
};

const ejercicio2 = async () => {

    const contenedor = document.getElementById("text-id2");
    contenedor.innerHTML = "Consultando API...<br>";

    try {
        const respuesta = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const datos = await respuesta.json();

        console.log(datos);

        contenedor.innerHTML += `
            Base: ${datos.base} <br>
            Tipo de cambio MXN: ${datos.rates.MXN} <br>
            Tipo de cambio EUR: ${datos.rates.EUR}
        `;

    } catch (error) {
        console.error("Error:", error);
        contenedor.innerHTML += "Error al consultar la API";
    }
};
