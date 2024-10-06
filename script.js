// Función para abrir el modal al hacer clic en la imagen
function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    // Mostrar el modal
    modal.style.display = "block";

    // Cambiar la imagen y descripción según el índice
    switch (index) {
        case 1:
            modalImage.src = "Img/Img1 (1).jpeg"; // Imagen 1
            captionText.innerHTML = "Yo soy de Chosica, hay un buen clima y un buen lugar para pasear";
            break;
        case 2:
            modalImage.src = "Img/Img2.jpeg"; // Imagen 2
            captionText.innerHTML = "El puente colgante es un buen lugar para tomar foto, si puedes ... ";
            break;
        case 3:
            modalImage.src = "Img/Img3.jpeg"; // Imagen 3
            captionText.innerHTML = "Chosica tiene un poco de todo si sabes buscar";
            break;
        case 4:
            modalImage.src = "Img/Img4.jpeg"; // Imagen 4
            captionText.innerHTML = "¿Te animas a ir?";
            break;
        default:
            break;
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
