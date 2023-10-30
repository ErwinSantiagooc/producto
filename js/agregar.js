document.getElementById("agregarpr").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;

    const data = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };

    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            alert("Los datos se han enviado con éxito a la API");

            window.location.href = "index.html";
        })
        .catch(error => {
            console.error("Hubo un error al enviar los datos a la API:", error);
        });

});