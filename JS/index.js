document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-review-form');
    const formContainer = document.getElementById('comment-form-container');

    toggleButton.addEventListener('click', function() {
        if (formContainer.style.display === 'none' || formContainer.style.display === '') {
            formContainer.style.display = 'block';
            toggleButton.textContent = 'Ocultar formulario'; // Cambia el texto del botón
        } else {
            formContainer.style.display = 'none';
            toggleButton.textContent = 'Escribir una reseña'; // Cambia el texto del botón de vuelta
        }
    });

    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura la fecha y hora actual
        const now = new Date();
        const date = now.toISOString().split('T')[0]; // Solo la fecha en formato YYYY-MM-DD

        // Asigna la fecha y hora al campo oculto
        document.getElementById('comment-date').value = date;

        const formData = new FormData(this);

        fetch('URL_DEL_SERVIDOR', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Éxito:', data);
            alert('Comentario enviado con éxito.');
            document.getElementById('comment-form').reset();
            document.getElementById('comment-form-container').style.display = 'none';
            document.getElementById('toggle-review-form').textContent = 'Escribir una reseña';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
