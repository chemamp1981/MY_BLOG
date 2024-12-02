const proyectoContainer = document.getElementById('grid-2');

fetch('./assets/data/datos.json')
    .then(response => response.json())
    .then(data => {
        data.proyectos.map((item) => {
            proyectoContainer.innerHTML +=

                `<div class="proyectos-container ${item.imagen}">
                  <a href="${item.linkGithub}" target="_blank"><div class="descripcion">
                        <h3>${item.nombre}</h3>
                        <p>${item.descripcion}</p>
                        <small>${item.tecnologias}</small>
                    </div></a>
                   
                </div>
                `
        })
    })


  /*  proyectoContainer.addEventListener("click", () =>{
        //enlace de la pagina que quieras
        window.location.href = ``
    
    });*/
