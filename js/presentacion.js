const presentacionContainer = document.getElementById('presentacion-container')
fetch('./assets/data/datos.json')
    .then(response => response.json())
    .then(data => {
        data.presentacion.map((item) => {
            presentacionContainer.innerHTML +=
            `
            <img class="img-circular" src="assets/Foto_Jose_Maria_Martinez.png" alt="foto de perfil" height="408" width="455">
            <h3>${item.nombre}</h3>
            <p>${item.descripcion}</p>
            
            <div class="iconos">
                <a href="${item.linkedin}" target="_blank">
                    <img class="icono" src="assets/linkedinIcono.svg" alt="icono linkedin" height="40" width="40">
                </a>
                <a href="${item.github}" target="_blank">
                    <img class="icono" src="assets/githubIcono.svg" alt="icono github" height="40" width="40">
                </a>
                <a href="${item.cvLink}" target="_blank">
                    <img class="icono" src="assets/cvIcono.svg" alt="icono curriculum" height="40" width="40">
                </a>
            </div>          
            `
        })
    })



