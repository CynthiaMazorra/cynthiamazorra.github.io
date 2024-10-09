window.onload = function () {
    const imagenes = [
        '../assets/images/LogoArray/imagen1.jpg',
        '../assets/images/LogoArray/imagen2.jpg',
        '../assets/images/LogoArray/imagen3.jpg',
        '../assets/images/LogoArray/imagen4.jpg'
    ];

    // Índice actual de la imagen
    let indiceImagen = 0;

    // Obtener el div
    const div = document.getElementById('cambiarFondo');

    // Agregar el evento de clic al div
    div.addEventListener('click', function () {
        // Incrementar el índice
        indiceImagen++;

        // Reiniciar el índice si es mayor al número de imágenes
        if (indiceImagen >= imagenes.length) {
            indiceImagen = 0;
        }

        // Cambiar el fondo del div
        div.style.backgroundImage = `url(${imagenes[indiceImagen]})`;
    });

    const cursor = new MouseFollower({
        container: 'body',
        speed: 0.2,
    });

    const images = document.querySelectorAll('.background-image');
let currentImageIndex = 0;

function changeBackground() {
    // Elimina la clase "active" de todas las imágenes
    images.forEach((img, index) => {
        img.classList.remove('active');
    });

    // Añade la clase "active" a la imagen actual
    images[currentImageIndex].classList.add('active');

    // Incrementa el índice de la imagen
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Cambia la imagen cada 5 segundos
setInterval(changeBackground, 5000);

// Inicia con la primera imagen activa
changeBackground();

}