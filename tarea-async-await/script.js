
async function ejercicio1() {

    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    document.getElementById("text-id").innerHTML = "Esperando 2 segundos...";

    await esperar(2000);

    document.getElementById("text-id").innerHTML = "Terminado ✅";
}




async function ejercicio2() {

    document.getElementById("text-id2").innerHTML = "Cargando datos...";

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const datos = await respuesta.json();

        let resultado = "";

        datos.forEach(usuario => {
            resultado += usuario.name + "<br>";
        });

        document.getElementById("text-id2").innerHTML = resultado;

    } catch (error) {
        document.getElementById("text-id2").innerHTML = "Error al cargar datos";
    }

}
