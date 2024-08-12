
document.addEventListener('DOMContentLoaded', function() {
    const peliculasContainer = document.getElementById('clientes-container');

    function obtenerRazas() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const razas = Object.keys(data.message);
                razas.forEach(raza => {
                    obtenerImagenDeRaza(raza);
                });
            })
            .catch(error => {
                console.error('Error al obtener las razas:', error);
            });
    }

    function obtenerImagenDeRaza(raza) {
        fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
            .then(response => response.json())
            .then(data => {
                const razaHTML = document.createElement('div');
                razaHTML.classList.add('raza-container');
                razaHTML.innerHTML = `
                    <h3>${raza}</h3>
                    <img src="${data.message}" alt="Imagen de ${raza}">
                `;
                peliculasContainer.appendChild(razaHTML);
            })
            .catch(error => {
                console.error(`Error al obtener la imagen de la raza ${raza}:`, error);
            });
    }

    obtenerRazas();
});
