let table;

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://siaweb-nodejs.carlos-reneren7.repl.co/productos";

    fetch(apiUrl).then((response) => {
        if (!response.ok) {
            throw new Error("No se pudo obtener los datos de la API.");
        }
        return response.json();
    }).then((data) => {

        table = $("#data-table").DateTable({
            data: data,
            columns: [
                { data: "nombre" },
                { data: "descripcion" },
                { data: "precio" },
                {
                    data: null,
                    render: function (data, type, row) {
                        const editButton = '<button class="editar-btn" data-id="' + row.id + '">Editar</button>';
                        const deleteButton = '<button class="eliminar-btn" data-id="' + row.id + '">Eliminar</button>';
                        return editButton + ' ' + deleteButton;
                    }
                }
            ]
        });
    }).catch((error) => {
        console.error("Error al obtener datos de la API: " + error);
    });
});


$("#data-table").on("click", ".editar-btn", function () {
    const productId = $(this).data("id");

    window.location.href = "../editar.html?id=" + productId;
});