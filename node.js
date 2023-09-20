// Crear el objeto likesCounts para almacenar la cantidad de likes por tarjeta
const likesCounts = {
    1: 9, // Inicializa con el valor inicial de la primera tarjeta
    2: 12, // Inicializa con el valor inicial de la segunda tarjeta
    3: 9, // Inicializa con el valor inicial de la tercera tarjeta
};

// Función para manejar el evento de clic en el botón "Like"
function like(postId) {
    likesCounts[postId]++; // Aumentamos el contador de likes
    const likesElement = document.getElementById(`post-${postId}`);
    likesElement.textContent = `${likesCounts[postId]} like(s)`; // Actualizamos el contenido del elemento span
}
