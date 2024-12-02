const contactoContainer = document.getElementById('contacto-container');

fetch('./assets/data/datos.json')
    .then(response => response.json())
    .then(data => {
        data.contacto.map((item) => {
            contactoContainer.innerHTML +=
                `<div class="label-container">
                    <label>${item.etiqueta}</label>
                    <p>${item.descripcion}</p>
                </div>
                `
        })
    })


       
