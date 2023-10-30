document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://siaweb-nodejs.carlos-reneren7.repl.co/productos";

    // Obtener el ID del producto a editar de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // Obtener los detalles del producto a editar
    fetch(apiUrl + "/" + productId)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo obtener los detalles del producto.");
            }
            return response.json();
        })
        .then((data) => {
            // Rellenar el formulario con los detalles del producto
            document.getElementById("producto-id").value = data.id;
            document.getElementById("nombre").value = data.nombre;
            document.getElementById("precio").value = data.precio;
            document.getElementById("descripcion").value = data.descripcion;
        })
        .catch((error) => {
            console.error("Error al obtener los detalles del producto: " + error);
        });

    // Agregar un manejador de eventos para el formulario de edición
    document.getElementById("Editarpr").addEventListener("submit", function (event) {
        event.preventDefault();

        const productoId = document.getElementById("producto-id").value;
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const descripcion = document.getElementById("descripcion").value;

        const data = {
            nombre: nombre,
            precio: precio,
            descripcion: descripcion
        };

        // Enviar los datos actualizados a la API para la edición
        fetch(apiUrl + "/" + productoId, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                alert("Los datos se han actualizado con éxito.");
                // Redirigir de vuelta al índice
                window.location.href = "index.html";
            })
            .catch(error => {
                console.error("Hubo un error al actualizar los datos: " + error);
            });
    });
});