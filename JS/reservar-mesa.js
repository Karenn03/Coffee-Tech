const mesas = [
    { id: 1, capacidad: 2 },
    { id: 2, capacidad: 4 },
    { id: 3, capacidad: 6 },
    { id: 4, capacidad: 8 },
    { id: 5, capacidad: 2 },
    { id: 6, capacidad: 4 },
    { id: 7, capacidad: 6 },
    { id: 8, capacidad: 8 },
    { id: 9, capacidad: 2 },
    { id: 10, capacidad: 4 },
    { id: 11, capacidad: 6 },
    { id: 12, capacidad: 8 },
    { id: 13, capacidad: 2 },
    { id: 14, capacidad: 4 },
];

const mesasContainer = document.getElementById('mesasContainer');
const inputNumeroPersonas = document.getElementById('personas');
const inputMesaSeleccionada = document.getElementById('mesa-seleccionada');
const form = document.querySelector('form');

function mostrarMesasDisponibles(numPersonas) {
    mesasContainer.innerHTML = '';

    const mesasDisponibles = mesas.filter(mesa => mesa.capacidad >= numPersonas);

    mesasDisponibles.forEach(mesa => {
        const mesaDiv = document.createElement('div');
        mesaDiv.className = 'mesa';
        mesaDiv.id = `mesa${mesa.id}`;
        mesaDiv.setAttribute('data-capacidad', mesa.capacidad);
        mesaDiv.innerHTML = `
            <span class="mesa-numero">${mesa.id}</span>
        `;

        mesaDiv.addEventListener('click', function() {
            document.querySelectorAll('.mesa').forEach(m => m.classList.remove('selected'));
            mesaDiv.classList.add('selected');
            inputMesaSeleccionada.value = mesa.id;
        });
        mesasContainer.appendChild(mesaDiv);
    });
}

inputNumeroPersonas.addEventListener('input', function() {
    const numPersonas = parseInt(this.value) || 0;
    if (numPersonas > 0) {
        mostrarMesasDisponibles(numPersonas);
    } else {
        mesasContainer.innerHTML = '';
    }
});

form.addEventListener('submit', function(event) {
    const numPersonas = parseInt(inputNumeroPersonas.value) || 0;
    if (numPersonas <= 0) {
        alert('Por favor, ingresa un número válido de personas.');
        event.preventDefault();
        return;
    }

    if (!inputMesaSeleccionada.value) {
        alert('Por favor, selecciona una mesa.');
        event.preventDefault();
        return;
    }
});

mostrarMesasDisponibles(1);