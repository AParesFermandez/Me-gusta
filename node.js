// Inicializamos el contador en 9 (puedes establecer otro valor inicial si lo deseas)
let likesCount = 9;

// Función para manejar el evento de clic en el botón "Like"
function like(postId) {
    likesCount++; // Aumentamos el contador de likes
    const likesElement = document.getElementById(`post-${postId}`);
    likesElement.textContent = `${likesCount} like(s)`; // Actualizamos el contenido del elemento span
}
