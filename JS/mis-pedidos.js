const buttons = document.querySelectorAll('.btn-group .btn');

const orderHistory = document.querySelector('.order-history');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        buttons.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');

        if (button.textContent === 'Todos') {
            orderHistory.innerHTML = `<div class="orders-message">
                <i class="fas fa-shopping-bag"></i>
                <p>¡Haz tu primera compra!</p>
                <p>Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.</p>
                <a href="menu.html" class="btn-order-now">Compra ahora</a>
            </div>`;
        } else if (button.textContent === 'Preparando') {
            orderHistory.innerHTML = `<div class="orders-message">
                <p>Pedido en preparación...</p>
            </div>`;
        } else if (button.textContent === 'Enviado') {
            orderHistory.innerHTML = `<div class="orders-message">
                <p>Tu pedido ha sido enviado.</p>
            </div>`;
        } else if (button.textContent === 'Para recoger') {
            orderHistory.innerHTML = `<div class="orders-message">
                <p>Tu pedido está listo para recoger.</p>
            </div>`;
        } else if (button.textContent === 'Entregado') {
            orderHistory.innerHTML = `<div class="orders-message">
                <p>Tu pedido ha sido entregado.</p>
            </div>`;
        }
    });
});