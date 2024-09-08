let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  function agregarAlCarrito(productoId, nombre, precio) {
    const productoExistente = carrito.find(p => p.id === productoId);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ id: productoId, nombre: nombre, precio: precio, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la interfaz del carrito
    actualizarCarritoUI();
  }

  // Función para mostrar la interfaz del carrito
  function actualizarCarritoUI() {
    const carritoVacio = document.getElementById('carrito-vacio');
    const carritoLleno = document.getElementById('carrito-lleno');
    const listaProductos = document.getElementById('lista-productos');
    
    if (carrito.length === 0) {
      carritoVacio.style.display = 'block';
      carritoLleno.style.display = 'none';
    } else {
      carritoVacio.style.display = 'none';
      carritoLleno.style.display = 'block';
      listaProductos.innerHTML = ''; // Limpiar lista actual de productos
      
      // Añadir cada producto al contenedor
      carrito.forEach(producto => {
        listaProductos.innerHTML += `
          <div>
            <p>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}</p>
            <button onclick="removerDelCarrito(${producto.id})">Eliminar</button>
          </div>
        `;
      });
    }
  }

function removerDelCarrito(productoId) {
    carrito = carrito.filter(p => p.id !== productoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoUI();
}

function irAMenu() {
    window.location.href = 'menu.html';
}