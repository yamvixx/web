// Espera a que el documento se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // Obtén los elementos del DOM
    const imageElement = document.getElementById('hero-image');
    const changeImageButton = document.getElementById('change-image');

    // Lista de URLs de imágenes románticas
    const images = [
        'momento2.jpg',
        'momento4.jpg',
        'momento3.jpg',
    ];

    // Variable para llevar el control de la imagen actual
    let currentImageIndex = 0;

    // Función para cambiar la imagen
    function changeImage() {
        // Incrementa el índice de la imagen y reinícialo si supera el límite
        currentImageIndex = (currentImageIndex + 1) % images.length;
        // Cambia la fuente de la imagen
        imageElement.src = images[currentImageIndex];
    }

    // Agrega el evento click al botón para cambiar la imagen
    changeImageButton.addEventListener('click', changeImage);
});


