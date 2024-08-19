const sizeButtons = document.querySelectorAll('.size-btn');

const priceValue = document.querySelector('#price-value');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        sizeButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        if (button.textContent === 'S') {
            priceValue.textContent = '7000COP';
        } else if (button.textContent === 'M') {
            priceValue.textContent = '8000COP';
        } else if (button.textContent === 'L') {
            priceValue.textContent = '9000COP';
        }
    });
});